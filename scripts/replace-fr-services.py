#!/usr/bin/env python3
"""
Replace French services array in default-content.php
Replaces lines 1095-1527 with the new 6-service array
"""

# Read the new services array from an external file
def load_new_services_array():
    """Load the 6-service array from a file"""
    array_file = '/Users/mac/paralaxstudio/scripts/services-array.php'
    try:
        with open(array_file, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: Services array file not found at {array_file}")
        return None

def replace_services():
    """Replace the French services array in default-content.php"""

    file_path = '/Users/mac/paralaxstudio/docker/wordpress/plugins/parallax-headless/src/default-content.php'
    
    # Load the new services array
    new_services_array = load_new_services_array()
    if not new_services_array:
        return False

    try:
        # Read the entire file
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        print(f"Total lines in file: {len(lines)}")
        print(f"Replacing lines 1095-1527...")

        # Replace lines 1095-1527 (0-indexed: 1094-1526)
        # Keep lines 0-1093 (before the services array)
        # Add new services array (which includes its own closing ],)
        # Skip lines 1527 (the old closing ], that we don't need) and keep 1528 onwards
        new_content = lines[:1094] + [new_services_array] + lines[1528:]

        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_content)

        print(f"Success! Replaced French services array in {file_path}")
        print(f"New file has {len(new_content)} lines")
        print("\nServices included:")
        print("  1. Schémas 2D")
        print("  2. Rendus 3D Fixes")
        print("  3. Animations Vidéo")
        print("  4. Panoramiques 360°")
        print("  5. Génération Artificielle")
        print("  6. Expériences Virtuelles")

    except FileNotFoundError as e:
        print(f"Error: File not found - {e}")
        return False
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

    return True

if __name__ == '__main__':
    success = replace_services()
    exit(0 if success else 1)
