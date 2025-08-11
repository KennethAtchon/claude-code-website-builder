# Prompt Enhancement System

## Overview
The prompt enhancement system improves user prompts using AI to make them more clear, actionable, and effective for website/application development.

## API Endpoint: `/api/enhancer`

### Purpose
- Takes user's original prompt and enhances it using LLM
- Provides clearer, more detailed instructions
- Helps users get better results from Bolt

### Technical Implementation

#### Request Format
```typescript
POST /api/enhancer
Content-Type: application/json

{
  "message": "user's original prompt text"
}
```

#### Response Format
- **Type**: Streaming text response
- **Content**: Enhanced prompt text
- **Streaming**: Real-time character-by-character delivery

#### Processing Pipeline
1. Receives original user prompt
2. Sends to LLM with enhancement instructions
3. Streams improved prompt back to client
4. Handles errors with 500 status response

### Enhancement Instructions
The system uses this prompt template:
```
I want you to improve the user prompt that is wrapped in `<original_prompt>` tags.

IMPORTANT: Only respond with the improved prompt and nothing else!

<original_prompt>
  ${user_message}
</original_prompt>
```

## Frontend Integration

### React Hook: `usePromptEnhancer`

#### State Management
- `enhancingPrompt`: Boolean indicating enhancement in progress
- `promptEnhanced`: Boolean indicating enhancement completion
- `resetEnhancer()`: Function to reset all states

#### Enhancement Process
```typescript
const enhancePrompt = async (input: string, setInput: (value: string) => void) => {
  // 1. Set loading state
  setEnhancingPrompt(true);
  setPromptEnhanced(false);

  // 2. Make API request
  const response = await fetch('/api/enhancer', {
    method: 'POST',
    body: JSON.stringify({ message: input }),
  });

  // 3. Stream response
  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  
  // 4. Process stream character by character
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    
    enhancedText += decoder.decode(value);
    setInput(enhancedText);
  }

  // 5. Complete enhancement
  setEnhancingPrompt(false);
  setPromptEnhanced(true);
};
```

#### Error Handling
- Restores original input on failure
- Logs errors for debugging
- Maintains UI state consistency

#### Usage Pattern
1. User enters initial prompt
2. Clicks enhancement button
3. System streams enhanced version
4. User can review and modify result
5. Enhanced prompt used for final request

## Enhancement Best Practices

### What Gets Enhanced
- Vague or unclear requirements
- Missing technical specifications
- Incomplete feature descriptions
- Ambiguous design requests

### Enhancement Improvements
- **Specificity**: Add concrete technical details
- **Completeness**: Fill in missing requirements
- **Clarity**: Restructure confusing language
- **Actionability**: Make requests more executable

### Example Enhancement
**Original**: "Make a website"
**Enhanced**: "Create a modern, responsive website with a clean design featuring a header navigation, hero section, services overview, and contact form. Use HTML5, CSS3, and JavaScript with a mobile-first approach."

## Integration Points

### User Interface
- Enhancement button in prompt input area
- Loading indicators during processing
- Visual feedback for completion
- Option to revert to original

### Development Workflow
1. User writes initial prompt
2. Optional: Use enhancement for clarity
3. Bolt processes enhanced prompt
4. Better, more complete results delivered

### Performance Considerations
- Streaming reduces perceived latency
- Character-by-character updates provide feedback
- Error recovery maintains user experience
- State management prevents UI inconsistencies

## Technical Architecture

### API Layer
- Remix action function handling
- Stream processing with TextEncoder/Decoder
- Error handling and status codes
- LLM integration for enhancement

### Frontend Layer
- React hook for state management
- Streaming response handling
- Real-time UI updates
- Error boundary protection

### Integration Benefits
- Improved user experience
- Better prompt quality
- More accurate AI responses
- Reduced need for clarification rounds