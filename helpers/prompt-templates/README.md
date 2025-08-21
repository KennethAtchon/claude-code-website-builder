# Prompt Template Conversion Instructions

## Converting Generic Template to Filled Templates

When creating filled templates from `generic-template.json`:

### Required Actions

1. **Remove all template mechanics**:
   - Delete `pickRandomlyFromRecommendedColors` array
   - Delete `colorPaletteScript` field
   - Delete `colorPaletteScriptDescription` field

2. **Select one primary color** from the recommended colors array

3. **Replace all placeholders** with specific, realistic content

4. **Make opinionated design choices** for fonts, layouts, and content

5. **Use production-quality specifications** throughout

### Quality Requirements

- **Complete**: No placeholders or template variables remaining
- **Specific**: Concrete content, not generic descriptions  
- **Professional**: Production-ready copy and specifications
- **Consistent**: Coherent design language and structure

### Naming Convention

Use format: `[purpose]-filled.json`

### Result

Filled templates must be complete, opinionated website specifications ready for immediate development use.