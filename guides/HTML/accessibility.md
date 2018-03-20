<h1>Web Accessibility</h1>

<!-- TOC -->

- [Types of disabilities](#types-of-disabilities)
- [Designing for Accessibility](#designing-for-accessibility)
- [WCAG 2.0](#wcag-20)
- [Section 508](#section-508)
- [Screen Readers](#screen-readers)
- [Coding for Accessibility](#coding-for-accessibility)
    - [Document structure](#document-structure)
    - [Images](#images)
    - [Lists](#lists)
    - [Navigation and skip links](#navigation-and-skip-links)
    - [Skip navigation](#skip-navigation)
    - [Forms](#forms)
    - [Tables](#tables)
    - [Media](#media)
    - [Accessible keyboard control](#accessible-keyboard-control)
    - [Performance](#performance)
    - [Progressive enhancement](#progressive-enhancement)
- [ARIA (Accessible Rich Internet Applications)](#aria-accessible-rich-internet-applications)
    - [Roles](#roles)
    - [States and Properties](#states-and-properties)
    - [Live regions](#live-regions)
- [How to test for accessibility](#how-to-test-for-accessibility)
- [References](#references)
- [Courses](#courses)

<!-- /TOC -->


<!------------------------------------ TYPES OF DIS. ------------------------------------>
# Types of disabilities

- **Vision issues:** blindness, low vision or color blindness.
- **Hearing issues:** deafness or hard-of-hearing.
- **Cognitive issues:** learning disabilities, distractibility, inability to remember or focus.
- **Technical issues:** slow connection, screen size or old technology.
- **Changing abilities:** effects of aging.
- **Temporary issues:** broken bones or recovery.
- **Crisis mode:** not thinking clearly and stressed.

<!------------------------------------ DESIGN ------------------------------------>
# Designing for Accessibility
 
**Responsive design**
- Responsive design depending of the screen size.
- Bright light environment need more contrast.
- Reference where the user is.

**Color**
- Between 5% - 10% of the population is color blindness.
- Don't rely on color.
- Types of color blindness: Red/Green deficiencies, blue deficiencies, no color.
- There are different color perceptions depending bright light.
- Take into consideration the contrast.

**Typography**
- Common font size between 16px and 20px.
- Take into consideration if the user modify the default font size.
- Always use relative units: em, rem and %.
- Keep contrast size between header and content.
- Make bold font really weight.
- Lines not extremly short or long: 45-75 characters per line, being 66 ideal. 
- Line height recommended to 120%.
- Text justification recommended to be left aligned.

**Forms**
- Identify required fields.
- Identify special formatings.
- Use clear and descriptive labels.
- Placeholders are not a replacement for a label.
- Provide clear feedbacks.

**Touch targets**
- Size of the target to touch between 44px and 48px.
- Enable enough space between touch targets.

**Focus and active indicators**
- Not remove default focus indicators.
- The focus indicators need to be unobstructed and they have to exists.
- Use enough contrast.
- Don't rely solely on color.

**Motion and vestibular disorders**
- 40% population over 40 age suffer motion or vestibular disorder.
- Affects using transforms, animations and parallax.
- Keep transitions and animation simple.
- Allow users to disable animations.

**Designing for crisis**
- Create a diverse set of Personas with different syntoms.

<!------------------------------------ WCAG ------------------------------------>
# WCAG 2.0

> Web Content Accessibility Guidelines ([WCAG](http://www.w3.org/WAI/intro/wcag.php)) 2.0 defines how to make Web content more accessible to people with disabilities.

They are part of the W3C and describe 12 guidelines base on *POUR* principles:
- **P (Perceivable):** Users must be able to perceive the information being present and cannot be invisible to all of their sense.
    - Provide tect alternatives: large print, braille, speech, symbols, simpler language
    - Time-based media: audio and video files, transcripts, captions
    - Make it adaptable: content hta can be presented in differente ways use good coding practices
    - Distinguisiable: make it easy to see and hear content, don't rely solely on color, providing strong color contrast, allowing text to resize, privde control for audiot that plays automatically
- **O (Operable):** Users must be able to operate all UI controls, cannot require interaction that can't be performed.
    - keyboard accessible: use links and buttons properly, logically structure forms contorls, wire up proper events with javascript, add aria roles and attributes
    - Enought time: if setting any sort of time limit, add contorls to pause stop hide or extend
    - dont cause seizures: less than 3 flashes in 1sec
    - make it navigable, use proper h1-h6 heading, ass skit to main content, add proper focus and active states
- **U (Understandable):** Users must be able to understand the information and the UI.
    - Make it readable: add proper laguange use the lang attr, add abbreviations with titles
    - predictable: things consisten throughout, don't use similar constrols for different things, keep navigation consistent, don't do anything jarring
    - input assistance: make forms easy to fill out, clearly identify requried fields, add labels, descriptions, hints and tips, error identification and messages
- **R (robust):** Users must be able to access the content as technologies advance. The site should not be fragile and should work in a wide variety of user agents and assistive technologies. It should also be future proof.
    - Compatible: build clena, well structeured, well organize, stands compliant code.
    - Add ARIA attributes.

There are several levels of conformance:
 - **A:** most basic of web accessibility features.
 - **AA:** biggest and most common barriers.
 - **AAA:** highest level of accesibility.

<!------------------------------------ SECTION 508 ------------------------------------>
# Section 508
> In 1998 the US Congress amended the Rehabilitation Act to require Federal agencies to make their electronic and information technology accessible to people with disabilities. Section 508 was enacted to eliminate barriers in information technology, to make available new opportunities for people with disabilities, and to encourage development of technologies that will help achieve these goals. 

Only specific for the US when working for the gobernment or any organization who received funding from the goberment. Section 508 refresh is expected to require conformance to WCAG 2.0 Level AA. 

Meeting WCAG 2.0 level AA covers all of section 508.

<!------------------------------------------- SCREEN READERS ------------------------------------------->
# Screen Readers

Most popular desktop Screen Readers
- JAWS (Windows)
- ZoomText (Mac and Windows)
- Window-Eyes (Windows)
- NVDA (Windows)
- VoiceOver (Mac)
- ChromeVox (Browser)

Using ***width: 0, height: 0, display: none or visibility: hidden*** prevent assistive technologies from reading their contents. Instead use:
```css
    .sr-hidden {
        position: absolute;
        left: -9999px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
```
Or:
```css
    .sr-hidden {
        position: absolute;
        clip: 1px 1px 1px 1px; /* for IE6 and IE7*/
        clip: 1px, 1px, 1px, 1px;
    }
```

<!------------------------------------ CODING ------------------------------------>
# Coding for Accessibility 
> Accessibility is essential for developers and organizations that want to create high quality websites and web tools, and not exclude people from using their products and services. The UN Convention on the Rights of Persons with Disabilities recognizes access to information and communications technologies, including the Web, as a basic human right.

## Document structure
- Use the correct HTML tags (HTML = Semantic = Accessibility).
- The markup should reflect the order.
- If we remove the CSS styles the content still will be accessible and readable in the same order.
- Use headers (h1-h6) in the right order, don't skip levels.
- Facilitate keyboard navigation.

**Level A 4.1.1 (Parsing)**
>In content implemented using markup languages, elements have complete start and end tags, elements are nested according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except where the specifications allow these features.

Use a valid Doctype to validate properly open and close tags, no duplicate elements attribute or no duplicate element ids.
```html
<!DOCTYPE html>
```
**Level A 2.4.2 (Page Titled)**
>Web pages have titles that describe topic or purpose.

Set a title for the page.
```html
<title>About | Website name</title>
```
**Level A 3.1.1 (Language of page)**
>The default human language of each Web page can be programmatically determined.

Use appropiate language attribute. It's important for the screen reader to pronounce right.
```html
<html lang="en">
<p>We want to here from you! Oh, also <span lang="es">se habla español!</span></p>
```
**Level A 2.4.6 (Heading and labels)**
>Headings and labels describe topic or purpose.

Use heading in the right order. There is only one h1.

**Level A 1.3.1 (Info and relationships)**
>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 

Use the right tag: *header, nav, main, footer, aside*. For various *nav* use aria-label: page | site.

**Level A 2.4.1 (Bypass blocks)**
>A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.

**Level AA 1.4.4 (Resize text)**
>Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality.

Use relative units like em or rem.

**Other considerations**
Set the character encoding to [UTF-8](https://en.wikipedia.org/wiki/UTF-8).
```html
<meta charset="utf-8" />
```
Set compatibility mode for IE.
```html
<meta http-equiv="x-ua-compatible" content="ie=edge">
```
Allow the user to resize text and resize the viewport.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
```
Use ***title*** attribute for ***abbr*** tag.
 ```html
This website is all about <abbr title="HyperText Markup Language">HTML</abbr>.
 ```

## Images
Assistive technologies cannot read text in images.
- Don't use text in images.
- Images are by default inaccessible.
- All images must use the ***alt*** attribute with a succinct description. Leave it empty if the image doesn't require a description, the screen readers will ignore this images. Include any text in the image. A value set in uppercase is going to be read it letter by letter.
- Use ***longdesc*** attribute with a file. It's not supported, so use a link to the file.
- Use ***aria-describedby*** attribute.

**Level A 1.1.1 (Non-text content)**
>All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below. 

**Level AA 1.4.5 (Images of text)**
>If the technologies being used can achieve the visual presentation, text is used to convey information rather than images of text.

Use text instead of images with text.

**SVG**
- In SVG images add the attribute ***role="img"*** for semantics.
- Use the ***title*** attribute and ***desc*** for expanded content, if necessary.
- Use ***aria-labelledby*** referencing the title.
```html
<svg role="img" aria-labelledby="icon-twitter">
    <title id="icon-twitter">Twitter</title>
</svg>
```

## Lists
- Lists improve semantic.
- Use unorder, ordered and descriptions list correctly.
- The screen readers are going to descrive the list: type of list, total items in list, item number, etc.

**Level A 1.3.1 (Info and relationship)**
> Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.

## Navigation and skip links
- Use a link to skip to the main content.
- Use descriptive text for links and CSS generated content.
- Don't rely in CSS to highlight content, use the appropiate tag.
- It's a good practise to add a sitemap.

## Skip navigation
A link is provided to skip navigation and other page elements that are repeated across web pages.
```html
<a href="#mainContent" class="skip-link">
    Skip to main content
</a>
...
<div class="navigation">...</div>
<div id="maincontent" tabindex="-1">...</div>
```
```css
#skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    z-index: 9999;
}

#skip-link:focus {
    top: 0;
}
```
 
**Level AA 3.2.3 (Consistent navigation)**
>Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user. 

**Level AA 2.4.5 (Multiple ways)**
>More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the result of, or a step in, a process.

**Level AA 3.2.4 (Consistent Identification)**
>Components that have the same functionality within a set of Web pages are identified consistently.

Buttons and icons should be labelled the same for similar functionality, don't switch things up.

**Level A 2.4.4 (Link purpose)**
>The purpose of each link can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.

## Forms
- Use ***for*** attribute in labels.
- Use ***required*** attribute for required fields.
- Set the ***tabindex*** to navigate through the keyboard only when it's necessary.
- Group logical together.
- Use ***fieldset*** to group related fields.
- Use a label with every input, including the ***for*** and ***id*** attributes related.
- Don't use a placeholder as a replacement for label.
- Use a hidden label when is obvious like in a search box using the following CSS code: 
- Use clear instructions for filling fields using ***em***.

**Level AA 1.4.3 (Contrast)** 
>The visual presentation of text and images of text has a contrast ratio of at least 4.5:1

**Level A 1.3.1 (Info and relationships)**
>Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. 

**Level AA 2.4.6 (Heading and labels)** 
>Headings and labels describe topic or purpose.

**Level A 3.3.2 (Labels and instructions)** 
>Labels or instructions are provided when content requires user input.
It's always prefer visible labels.

**Level A 4.1.2 (Name, role, value)** 
>For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies. 

**Level A 1.3.3 (Sensory Characteristics)**
>Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound. 

**Level A 2.1.1 (Keyboard)**
>All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

**Level A 2.1.2 (No keyboard traps)** 
>If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.

**Level AA 2.4.7 (Focus visible)**
>Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.

**Level A 1.4.1 (Use of color)**
>Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.

Dont rely in color to warn the user

**Level A 3.3.1 (Error identification)**
>If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.

**Level AA 3.3.3 (Error suggestion)**
>If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.

**Level AA 3.3.4 - (Error prevention)**
>For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses.

**Level A 2.2.1 (Timing adjustable)**
>For each time limit that is set by the content.

**Level A 3.2.2 (On input)**
>Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.

**Level A 1.3.2 (Meaningful sequence)**
>When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.

**Level A 2.4.3 (Focus order)**
>If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability.

**Level A 3.2.1 (On Focus)**
>When any component receives focus, it does not initiate a change of context.

```html
<form id="contact" novalidate>
    <section id="errors" aria-live="assertive" tabindex="-1">
    </section>

    <!-- assertive will validate the field when lost the focus -->
    <label for="name" aria-live="assertive">Name (Required):
        <span class="error-message">Name cannot be empty</span>
    </label>
    <input id="name" type="text" name="name" required aria-invalid="true"/>

    <!-- Explicit label -->
    <label for="email">Email (Required):
        <span class="error-message">Email cannot be empty</span>
    </label>
    <input id="email" type="email" name="email" required/>

    <label for="phone">Phone:</label>
    <input id="phone" type="tel" name="phone" />

    <!-- Implicit label -->
    <label>
        <input type="checkbox" name="newsletter"> Subscribe to newsletter
    </label>
    
    <!-- Fieldset to group related fields -->
    <fieldset>
        <legend>Phone number type</legend>    
        <label>
            <input type="radio" name="phone-type" value="home"> Home
        </label>
        <label>
            <input type="radio" name="phone-type" value="work"> Work
        </label>
        <label>
            <input type="radio" name="phone-type" value="cell"> Cell
        </label>
    </fieldset>

    <button>Submit</button>
</form>
``` 

## Tables
- Tables should not be used for layout, use tables for tabular data.
- Complex tables should have a summary of how the table data is structured but table summary has been depcreated, instead use the ***caption*** tag.
- Avoid complex tables.
- Avoid nesting and spanned columns/rows. Use flatten data as much as possible.
- Use: ***caption, thead, tfoot, tbody, th***, etc and set the scope of the rows and columns with ***scope*** and values ***row, col, rowgroup or colgroup***.
- Set the ***tfoot*** tag before the ***tbody***

```html
<table>
    <caption>Table description</caption>
    <thead>
        <tr>
            <th scope="col">col1</th>
            <th scope="col">col2</th>
            <th scope="col">col3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="row">row-col1 </td>
            <td>row-col2</td>
            <td>row-col3</td>
        </tr>
    </tbody>
</table>
```
Example of table with grouped rows.
```html
<table>
    <caption>Table description</caption>
    <thead>
        <tr>
            <th id="prod" scope="col">col1</th>
            <th id="cost" scope="col">col2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th id="basic" colspan="2" scope="colgroup">First group</th>
        </tr>
        <tr>
            <td headers="basic prod">Group1-col1</td>
            <td headers="basic cost">Group1-col2</td>
        </tr>
        <tr>
            <td headers="basic prod">Group1-col1</td>
            <td headers="basic cost">Group1-col2</td>
        </tr>
    </tbody>
    <tbody>
        <tr>
            <th id="awesome" colspan="2" scope="colgroup">Second group</th>
        </tr>
        <tr>
            <td headers="awesome prod">Group2-col1</td>
            <td headers="awesome cost">Group2-col2</td>
        </tr>
    </tbody>
</table>
```

## Media
Any embedded media using iframe should have a label, via the **title** attribute.

For audio:
**Level A 1.2.1 (audio-only and video-only)**
>For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled.

Create transcripts using a paid service or speech recognition like [Google Docs Voice Typing](https://gsuite.google.com/apps-show/episodes/voice-typing-google-docs/#/video/b1Zpw2taB4I), [Windows Speech Recognition](https://support.microsoft.com/en-us/help/17208/windows-10-use-speech-recognition), [Apple Dictation](https://support.apple.com/en-us/HT202584) or [Dragon Naturally Speaking](https://www.nuance.com/dragon.html), or do it manually.
In the transcription include names of speakers, describe everything. Do it inline or add a link with the transcription.

For video:

Types of caption:
 - **Open:** Always visible, embedded/burned into videos
 - **Closed:** Overlay, toggled on/off by user
 
**Level A 1.2.3 (Audio description or media alternative)**
>An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.

**Level A 1.1.1 (Non-text content)**
>All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.

**Level AA 1.2.5 (Audio description)**
>Audio description is provided for all prerecorded video content in synchronized media.

**Level A 1.4.2 (Audio control)**
>If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level. 

**Level A 2.2.2 (Pause, Stop, Hide)**
>For moving, blinking, scrolling, or auto-updating information.

**Level A 2.3.1 (Three flashes or below threshold)**
>Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds. 


## Accessible keyboard control
- Show focus and active indicators.
- The tab order must be ltr or rtl, and top to bottom.
- The attribute ***tabindex="0"*** inserts the element into the default navigation order.
- Skip long navigation links.
- Use ***:focus*** and ***:active***.
- Tabbable Elements: ***a, button, input, select, textarea, iframe***

**Tab order**
Tab order is important. Never set a ***tabindex*** attribute greater than 0, acceptable values are -1 or 0.
 - **-1:** the element should be focusable. It's removed from natural tab order but focusable via JavaScript with ***element.focus()***.
 - **0:** added to natural tab order, focusable via JavaScript too.


**Tabtrapping**
Steps:
1. Select the modal
2. Find and select all focusable children
3. Convert them to an Array
4. Find the first and the last tabbable item inside the modal
5. Listen for keydown event
6. Check to see if it's the tab key and if the shift key is being held down
7. If moving forward and on the last item, focus the first item
8. If moving backward and on the first item, focus the last item
```js
function tabTrap() {
    var previousFocused = document.activeElement,
        focusables = modal.querySelectorAll("a[href], area[href], input:not([disabled]), iframe, object, embed, [tabindex='0'], [contenteditable]");
    
    focusables = Array.prototype.slice.call(focusables);

    var firstItem = focusables[0],
        lastItem = focusables[focusables.length - 1];

    modal.addEventListener("keydown", trap);
}

function trap(event) {
    if (event.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === firstItem) {
                event.preventDefault();
                lastItem.focus();
            }
        } else {
            if (document.activeElement === lastItem) {
                event.preventDefault();
                firstItem.focus();
            }
        }
    }
}
```

## Performance
 - Keep file sizes small.
 - Limit http requests.
 - Optimize images with compression techniques like:
    - [JPEGmini](http://www.jpegmini.com/)
    - [TinyPNG](https://tinypng.com/)
 - Leverage image sprites.
 - Use SVG when it's possible. They are small, embedded into HTML, can be styled with css, greater flexibility and scalable
 - Inlining critical path CSS.

## Progressive enhancement
1. Start with the lowest common denominator.
2. Well-structured HTML.
3. Add in well-supported CSS.
4. Add more advanced CSS.
5. Add javascript further enhance the experience

<!------------------------------------ ARIA ------------------------------------>
# ARIA (Accessible Rich Internet Applications)

**WAI-ARIA**: Web Accessibility Initiative group equivalent to W3C. Try to use default HTML is possible. ARIA is divided in two categories:<br/>

## Roles
Now it's part of the HTML5 specification. Use to define what a widget is or what it does. Aria roles describe components and structures. Roles help to navigate content or describe common regions. They are added with the ***role*** attribute.
- **application:** if the region is considered an application instead of a website.
- **banner:** header of the site or application.
- **navigation:** navigation for the site.
- **main:** main content.
- **search:** search form.
- **complimentary:** content that is complimentary to the main content.
- **form:** collection of fields.
- **contentinfo:** footer or information about the parent document.

Other types of roles:
- **Widget roles:** alert, alerdialog, button, checkbox, dialog, gridcell, link log marquee, menuitem, menuitemcheckbox, option, progressbar, radio, scrollbar, slider, spinbutton, status, tab, tabpanel, textbox, timer, tooltip, treeitem.
- **Container roles:** combobox, grid, listbox, menu, menubar, radiogroup, tablist, tree, treegrid.
- **Document structure roles:** article, columnheader, definition, directory, document, group, heading, img, list, listitem, math, note, presentation, region, row, rowgroup, rowheader, separator, toolbar.

```html
<article role="article">Content</article>
```
If the browser doesn't support article tag it's translated to a div but the ARIA rol let us keep the semantic meaning
```html
<div role="article">Content</div>
```
Define the type of element is described. A Screen Reader parse the element as a button in this example.
```html
<span role="button" tabindex="0" class="button">Click me</span>
```

## States and Properties
Describe dynamic states that can be changed with JavaScript. They are prefixed with the ***aria-*** attribute. Properties describe relationships that rarely change.
- **States:** aria-busy, aria-disabled, aria-grabbed, aria-hidden, aria-invalid.
- **Properties:** aria-describedby, aria-flowto, aria-haspopup, aria-label, aria-labelledby.

**aria-label**
It's used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use **aria-labelledby** instead.
```html
<button aria-label="Close">Click me</button>
```

**aria-describedby**
It's used to indicate the IDs of the elements that describe the object.

```html
<button aria-label="Close" aria-describedby="descriptionClose">Click Me</button>
<div id="descriptionClose">Closing this window will discard any information entered and return you back to the main page</div>
```

## Live regions
- **aria-live:** Let the Screen Readers knows that a part of the site has been updated. The values are ***off/polite/assertive***
- **aria-relevant:** Describes what types of changes have ocurred to an ***aria-live*** region and of which are relevant and should be announced. Values are ***additions/removals/text/all***

<!------------------------------------ TESTING ------------------------------------>
# How to test for accessibility
- Stop using a mouse.
- Download and use a screen reading: 
    - MAC: [VoiceOver](https://www.apple.com/voiceover/info/guide/_1124.html)
    - Windows: [NVaccess](https://www.nvaccess.org/)
- Download the checkpoints list for web content accessibility guidelines.
- Tools:
    - [Web Accessibility Evaluation Tool](http://wave.webaim.org)
    - [Color Contrast Analyzer](https://chrome.google.com/webstore/detail/color-contrast-analyzer/dagdlcijhfbmgkjokkjicnnfimlebcll?hl=en)
    - [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
    - [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)
    - [Audits in Chrome developer tools](https://developer.chrome.com/devtools#audits)
    - [Analyze with Tenon](http://www.tenon.io)


<!------------------------------------------- REFERENCES ------------------------------------------->
# References

- [WebAIM Web Accessibility in mind](http://webaim.org/)
- [WebAIM Checklist](http://webaim.org/standards/wcag/checklist)
- [Section 508](http://www.section508.gov)
- [Tenon: Analyze website accessibility](https://tenon.io/)
- [tota11y: Accessibility visualization toolkit](http://khan.github.io/tota11y/)
- [Accessibility Developer Tool extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb/related?hl=en)
- [Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_Widgets)
- [Periodic table of Aria Roles](http://dylanb.github.io/periodic-aria-roles.html)
- [Accessibility Cheat sheet](http://bitsofco.de/2015/the-accessibility-cheatsheet)
- [A11y Project](http://a11yproject.com)


# Courses
- [Frontend Masters - Web Accessibility by Jon Kuperman](https://frontendmasters.com/courses/web-accessibility/?u=83c5033cb7d4129b73f4255d154ceb45210e43e2)
- [Web Accessibility: Getting Started](https://app.pluralsight.com/library/courses/web-accessibility-getting-started/table-of-contents)
- [Meeting Web Accessibility Guidelines (Section 508/ WCAG 2.0)](https://app.pluralsight.com/library/courses/web-accessibility-meeting-guidelines/table-of-contents)
