# Cool CSS for value accessor in Ionic and Angular 

[![N|Solid](https://avatars2.githubusercontent.com/u/10485117?s=460&v=4)](https://ofermisk.com)


# Intro 
This is a full working component of a checkbox, using it as a valueAccessor for angular reactive forms.
This is not an npm package, for the simple reason, i give you the freedom to change it to be your own component, no strings attached.

![checkbox example](https://res.cloudinary.com/pixelapps/image/upload/v1570699590/github-resources/chk_example.png)

# Copy component in its full
Download check-box-button from github.
Copy the folder into your own project, remember this is a custom component and not a module, so you have to declare it on your desired module.


# Using the css checkbox
In your reactive form component (.ts file), initialize the checkbox with default value...
```
this.reactiveForm = this.fb.group({
    first_chk: [false],
    second_chk:[true]
});  
```
In your HTML, under your reactive form ([formGroup]="reactiveForm" ) declare a check box like so : 
```
<app-check-box-button formControlName="first_chk" check-box-name="first_chk"  check-box-value="First check box"></app-check-box-button>
```

This is it, it is connected to your form, and any change will be propogated to your containning form.
On click, the onchange will fire, and on submit, it is readable from the form values : 
```
let first_clicked = this.reactiveForm.value.first_chk
```

It is important to know, the check box is a boolean indicator, checked return true, unchecked return false.

Your can read all about Ionic, angular and much more on my blog at [ofermisk.com](http://ofermisk.com)