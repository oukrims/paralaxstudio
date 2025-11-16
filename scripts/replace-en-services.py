#!/usr/bin/env python3
"""
Replace English services array in default-content.php with new 6-service structure.
"""

# Read the new services array
with open('scripts/services-array-en.php', 'r', encoding='utf-8') as f:
    new_services = f.read()

# Read the main file
with open('docker/wordpress/plugins/parallax-headless/src/default-content.php', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in file: {len(lines)}")

# Find the English services array boundaries
# It starts at line 3673 and we need to find where it ends
start_line = 3672  # 0-indexed (line 3673 - 1)

# Find the closing bracket for services array
end_line = None
bracket_count = 0
for i in range(start_line, len(lines)):
    line = lines[i]
    if "'services' => [" in line:
        bracket_count = 1
    elif bracket_count > 0:
        bracket_count += line.count('[')
        bracket_count -= line.count(']')
        if bracket_count == 0 and '],' in line:
            end_line = i
            break

if end_line is None:
    print("ERROR: Could not find end of services array!")
    exit(1)

print(f"Replacing lines {start_line + 1}-{end_line + 1}...")

# Replace the services array
output_lines = lines[:start_line] + [new_services] + lines[end_line + 1:]

# Write back
with open('docker/wordpress/plugins/parallax-headless/src/default-content.php', 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print(f"Success! Replaced English services array in docker/wordpress/plugins/parallax-headless/src/default-content.php")
print(f"New file has {len(output_lines)} lines")
print("\nServices included:")
print("  1. 2D Schematics")
print("  2. 3D Fixed Renders")
print("  3. Video Animations")
print("  4. 360° Panoramics")
print("  5. AI Generation")
print("  6. Virtual Experiences")
