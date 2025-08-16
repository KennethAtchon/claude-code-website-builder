# Prompt Template System

This directory contains website specification templates used for generating production-ready websites with Next.js, TypeScript, Tailwind CSS, and shadcn.

## Template Types

### 1. Generic Template (`generic-template.json`)
- Base template with placeholder variables like `{{websiteName}}`, `{{primaryColor}}`, etc.
- Universal structure that can be adapted for any website type
- Contains template instructions and color generation scripts

### 2. Filled Templates (`*-filled.json`)
- **Purpose**: Complete, opinionated examples with all placeholders replaced with real values
- **Naming**: `[purpose]-filled.json` (e.g., `dashboard-filled.json`, `portfolio-filled.json`)
- **Usage**: Reference examples for specific website types

## Converting Templates to Filled Examples

When creating filled templates from the generic template, follow these rules:

### Required Changes

1. **Remove Template Mechanics**:
   ```json
   // REMOVE these sections entirely:
   "pickRandomlyFromRecommendedColors": [...],
   "colorPaletteScript": "node ../color-palette-generator.js...",
   "colorPaletteScriptDescription": "USE THE SCRIPT, DONT FILL IN..."
   ```

2. **Pick One Color**: Select a single color from the recommended array and use it as the primary color

3. **Fill All Placeholders**: Replace every `{{variable}}` with actual content:
   - `{{websiteName}}` → "DataFlow Dashboard"
   - `{{primaryColor}}` → "#4361EE"
   - `{{sectionName}}` → "Key Metrics Overview"
   - etc.

4. **Make Opinionated Choices**:
   - Choose specific fonts (e.g., "Inter", "JetBrains Mono")
   - Define concrete page structures
   - Specify real section content and CTAs
   - Use actual Unsplash image URLs

5. **Remove Template Metadata**: Keep only relevant `templateInfo` for the specific use case

### Quality Standards

- **Complete**: Every placeholder must be filled with realistic content
- **Specific**: Use concrete examples, not generic descriptions
- **Consistent**: Maintain coherent design language throughout
- **Professional**: Use production-quality copy and specifications

### Example Structure

```json
{
  "website": {
    "name": "Specific Website Name",
    "type": "dashboard|portfolio|blog|ecommerce",
    "description": "Detailed description of the specific website",
    // ... all fields filled with real values
  }
}
```

## Usage

1. **For Development**: Use filled templates as complete specifications for building websites
2. **For Reference**: Study filled templates to understand how to structure different website types
3. **For Customization**: Start with a filled template and modify specific sections as needed

## File Organization

```
prompt-templates/
├── README.md                    # This file
├── generic-template.json        # Base template with placeholders
├── dashboard-filled.json        # Complete dashboard example
├── portfolio-filled.json        # Complete portfolio example
└── specific-templates/          # Legacy templates (reference only)
```

## Important Notes

- Filled templates should be **production-ready specifications**
- Never leave placeholders in filled templates
- Choose colors that work well together and maintain accessibility
- Use high-quality, relevant stock images from Unsplash
- Ensure all CTAs and navigation make logical sense for the website type