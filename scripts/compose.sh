#!/usr/bin/env bash

set -euo pipefail

usage() {
  cat <<'EOF'
Usage: scripts/compose.sh {start|stop|restart|wp} [dev|prod] [extra args...]

Commands:
  start     Build (if needed) and start the stack in detached mode.
  stop      Stop and remove the stack.
  restart   Restart the stack (stop + start).
  wp        Run a WP-CLI command (defaults to dev stack). Example:
            ./scripts/compose.sh wp plugin list

Environment:
  dev       Uses docker-compose.yml (default).
  prod      Uses docker-compose.prod.yml.
EOF
}

if [[ $# -lt 1 ]]; then
  usage
  exit 1
fi

ACTION=$1
shift

ACTION_LC=$(printf '%s' "$ACTION" | tr '[:upper:]' '[:lower:]')

ENVIRONMENT="dev"
if [[ $# -gt 0 ]]; then
  case "$(printf '%s' "$1" | tr '[:upper:]' '[:lower:]')" in
    dev)
      ENVIRONMENT="dev"
      shift
      ;;
    prod | production)
      ENVIRONMENT="prod"
      shift
      ;;
  esac
fi

ENVIRONMENT_LC="$ENVIRONMENT"

case "${ENVIRONMENT_LC}" in
  dev)
    COMPOSE_FILE="docker-compose.yml"
    ;;
  prod | production)
    COMPOSE_FILE="docker-compose.prod.yml"
    ;;
  *)
    echo "Error: unknown environment '${ENVIRONMENT}'." >&2
    usage
    exit 1
    ;;
esac

ENV_FILE=".env"
if [[ ! -f "$ENV_FILE" ]]; then
  if [[ -f ".env.example" ]]; then
    echo "No .env found, copying from .env.example..."
    cp .env.example "$ENV_FILE"
  else
    touch "$ENV_FILE"
  fi
fi

compose() {
  docker compose -f "$COMPOSE_FILE" "$@"
}

case "${ACTION_LC}" in
  start)
    compose up -d --build
    ;;
  stop)
    compose down
    ;;
  restart)
    compose down
    compose up -d --build
    ;;
  wp)
    if [[ $# -lt 1 ]]; then
      echo "Error: missing WP-CLI arguments." >&2
      echo "Example: ./scripts/compose.sh wp plugin list" >&2
      exit 1
    fi
    WP_ARGS=("$@")
    NEED_ALLOW_ROOT=true
    for arg in "${WP_ARGS[@]}"; do
      if [[ "$arg" == "--allow-root" ]]; then
        NEED_ALLOW_ROOT=false
        break
      fi
    done
    if $NEED_ALLOW_ROOT; then
      WP_ARGS+=("--allow-root")
    fi
    compose run --rm --entrypoint wp wp-cli "${WP_ARGS[@]}"
    ;;
  *)
    echo "Error: unknown action '${ACTION}'." >&2
    usage
    exit 1
    ;;
esac
