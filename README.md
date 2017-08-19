# colorer

Simple javascript color utility.

## Usage

### Plain color

````javascript
import colorer from 'colorer';

const themedColor = colorer('#ffcc33'); // 'rgba(255,204,51,1)';

// Percentage from -100 to 100;
// light(perc) - adds or subtracts curr value level;
const lighter = themedColor.light(10); // 'rgba(255,204,51,1)' - max light range
const darker = themedColor.light(-10); // 'rgba(230,184,46,1)'

// Percentage from -100 to 100;
// depth(perc) - adds or subtracts curr saturation level;
const saturated = themedColor.depth(10); // 'rgba(255,198,25,1)'
const desaturated = themedColor.depth(-10); // 'rgba(255,210,76,1)'

// Degrees - 0 to 360;
// tone(perc) - moves curr hue level;
const changedColor = themedColor.tone(180); // 'rgba(255,51,143,1)'

````

