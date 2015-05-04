## Components

This directory is meant to hold Angular directives. Specifically directives that are restricted to element and
have an isolated scope. We are using the terminology component here to be more inline with the ternimology
in Angular2.

This directory is also going to hold routable components. In Angular1.4 the ComponentRouter maps to a controller
and template pair. For an example of a routeable component see the "example" directory ./example. naming is very
important here.

```javascript

    // If your route config looks like this...
     this.$router.config([
         { path: '/', component: '<component-name>' }
     ]);
     
     // You would need to create a directory with two files in it
     // the directory would be app/components/<component-name>
     // the template file would be app/components/<component-name>/<component-name>.html
     // the controller file would be app/components/<component-name>/<component-name>-controller.ts
     
```