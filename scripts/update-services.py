#!/usr/bin/env python3
"""
Script to replace the French services array in default-content.php
with the new 6-service structure.
"""

# Read the file
with open('/Users/mac/paralaxstudio/docker/wordpress/plugins/parallax-headless/src/default-content.php', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# The new services array (lines 1095-1527 will be replaced)
new_services = """					'services' => [
						// Service 1: Schémas 2D
						[
							'slug' => 'schemas-2d',
							'title' => 'Schémas 2D',
							'tagline' => 'Représentations isométriques et coupes architecturales précises',
							'description' => 'Les rendus 2D isométriques et les coupes architecturales sont des outils puissants pour représenter et communiquer des concepts architecturaux de manière claire, concise et esthétiquement agréable. Ils permettent de contextualiser votre projet à la bonne échelle dans son environnement, tout en offrant des avantages pratiques en termes de coûts, délais et facilité d\\'analyse.',
							'heroImage' => [
								'id' => 'hero-schemas-2d',
								'src' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
								'alt' => 'Schéma architectural isométrique d\\'un bâtiment moderne',
							],
							'benefits' => [
								[
									'id' => 'benefit-schemas-1',
									'title' => 'Clarté et lisibilité exceptionnelles',
									'description' => 'Les rendus 2D isométriques offrent une représentation claire et précise de la disposition spatiale. Les lignes parallèles et angles égaux permettent de comprendre facilement la relation entre les différents éléments architecturaux.',
									'icon' => 'layers',
								],
								[
									'id' => 'benefit-schemas-2',
									'title' => 'Communication efficace et universelle',
									'description' => 'Idéaux pour communiquer des idées architecturales à un large public incluant clients, investisseurs et équipes multidisciplinaires. Ils simplifient la présentation d\\'informations complexes de manière intuitive.',
									'icon' => 'layers',
								],
								[
									'id' => 'benefit-schemas-3',
									'title' => 'Coûts et délais optimisés',
									'description' => 'Plus rapides et moins coûteux que les rendus 3D, ils nécessitent moins de temps de modélisation et peuvent être produits rapidement, avantageux pour les projets avec contraintes budgétaires.',
									'icon' => 'layers',
								],
								[
									'id' => 'benefit-schemas-4',
									'title' => 'Contextualisation urbaine précise',
									'description' => 'L\\'ajout d\\'éléments naturels et urbains permet de situer le projet dans son environnement réel et d\\'évaluer l\\'échelle, créant une représentation vivante qui constitue un argument de vente non négligeable.',
									'icon' => 'layers',
								],
							],
							'process' => [
								[
									'id' => 'process-schemas-1',
									'title' => 'Analyse du projet',
									'description' => 'Étude approfondie de vos plans architecturaux',
									'icon' => 'circle',
									'details' => 'Nous analysons vos plans, coupes et élévations pour comprendre les caractéristiques spatiales et structurelles de votre projet. Cette étape nous permet d\\'identifier les angles de vue optimaux et les éléments clés à mettre en valeur.',
								],
								[
									'id' => 'process-schemas-2',
									'title' => 'Création des schémas',
									'description' => 'Réalisation de rendus isométriques et coupes',
									'icon' => 'square',
									'details' => 'Nous créons des représentations 2D précises en respectant les proportions et échelles. Chaque schéma est enrichi d\\'éléments contextuels (végétation, mobilier urbain, personnages) pour une meilleure compréhension spatiale.',
								],
								[
									'id' => 'process-schemas-3',
									'title' => 'Finalisation et livraison',
									'description' => 'Optimisation et export multi-formats',
									'icon' => 'triangle',
									'details' => 'Nous peaufinons les détails graphiques, ajustons les couleurs et matières, puis livrons vos schémas dans les formats adaptés à vos besoins (PDF, PNG haute résolution, formats d\\'impression).',
								],
							],
							'images' => [
								[
									'id' => 'schemas-img-1',
									'src' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
									'alt' => 'Vue isométrique d\\'un complexe architectural',
								],
								[
									'id' => 'schemas-img-2',
									'src' => 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
									'alt' => 'Coupe architecturale détaillée d\\'un bâtiment',
								],
								[
									'id' => 'schemas-img-3',
									'src' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
									'alt' => 'Schéma axonométrique avec environnement urbain',
								],
								[
									'id' => 'schemas-img-4',
									'src' => 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368',
									'alt' => 'Façade architecturale avec éléments contextuels',
								],
							],
							'relatedProjects' => [],
							'icon' => 'layers',
							'category' => 'Visualisation 2D',
							'ctaLabel' => 'Demander un devis',
							'ctaHref' => '/fr/contact',
						],
					],
"""

# Replace lines 1094-1526 (0-indexed: 1093-1526, inclusive means up to but not including 1527)
# Line 1095 is index 1094, line 1527 is index 1526
output_lines = lines[:1094] + [new_services] + lines[1527:]

# Write back
with open('/Users/mac/paralaxstudio/docker/wordpress/plugins/parallax-headless/src/default-content.php', 'w', encoding='utf-8') as f:
    f.writelines(output_lines)

print("✓ Successfully updated French services array")
print("  - Replaced lines 1095-1527 with new 6-service structure")
print("  - Backup saved at default-content.php.backup")
