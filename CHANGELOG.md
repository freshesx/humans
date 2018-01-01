## 3.0.0

### @humans/input

* Add parseBeforeFn, parseAfterFn, parseClearFn props to change the value.
* The default size of input is changed to `lg`, and remove `lg` size, and add `sm` size.

### @humans/checkbox

* Now we rename the old `vue-human/suites/check` to the new `@humans/checkbox`. Include: `mn-checkbox`, `mn-checkbox-icon`, `mn-checkbox-item` and `mn-checkbox-tag` tags.

### @humans/nav-bar

* Fix bug: allow pass icon to navBarBack prop.

### @humans/search-bar

* When use search-bar with input, the input must be set size prop to `sm`. Because the input component's size prop is `lg`
 by default.

### @humans/column

* You can use `@humans/share` to custom your response screens config before load `@humans/column`.

### @humans/page

* Add &lt;div&gt; into page component to avoid transition one tag bug.

### vuelidate

* You need to load vuelidate manually.
