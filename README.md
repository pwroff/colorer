# colorer

Simple and easy to use javascript color utility for modifying and mixin color. Can be used with any existing colors or theme objects, e.g. `styled-components` theme.

## Usage

### Usage as a plain color

````javascript
import colorer from 'colorer';

// Set initial color;
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
// tone(deg) - moves curr hue level;
const changedColor = themedColor.tone(180); // 'rgba(255,51,143,1)'

// You can chain your color modifications
const chained = themedColor
  .tone(180)
  .light(10)
  .depth(10); // 'rgba(255,25,129,1)';

````
### Usage with styled-components

````javascript
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import colorer from 'colorer';

// Initital colors can be object of colors;
const theme = colorer({
    primary: '#1199ee',
    secondary: '#dd44cc'
});
const PrimaryBox = styled.div`
  backgorund-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.secondary};
  
  &:hover {
    backgorund-color: ${({theme}) => theme.primary.light(-10)};
    color: ${({theme}) => theme.secondary.tone(90)};
  }
`;
const Themed = ({children}) => (
  <ThemeProvider theme={theme}>
    <PrimaryBox>
      {children}
    </PrimaryBox>
  </ThemeProvider>
);

````

# License

MIT License

Copyright (c) 2016 Leonid Lazaryev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

