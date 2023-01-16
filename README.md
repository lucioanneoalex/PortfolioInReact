# README

this is an example of a portfolio page that contains the following sections:

- A header with external links to social media accounts and internal links to other sections of the page
- A landing section with an avatar picture and a short bio
- A section to display your featured projects as cards in a grid fashion
- A contact me section with a form to allow visitors to contact you

### Open Source Libraries included

#### Chakra UI

The components from this library are imported from the `@chakra-ui/react` package at the top of each corresponding file.
Their official [documentation](https://chakra-ui.com/docs/components) shows all the components disposal and their corresponding props.

you need to install the _Chakra UI_ and other referenced libraries by running the `npm install` command. This will install all the required missing dependencies, so that you can begin working on the task.

#### Formik and Yup

The `useFormik` hook is used from the Formik library, as well as the global `Yup` object to define the Contact Me form validation rules.

The form UI will is implemented using Chakra UI components.

#### Header

a) **social media links**

The social media link are placed inside the first `nav` element. The data is provided in the `socials` array at the top of the file.

The `HStack` Chakra UI component is used to stack the links horizontally.
Each social is an `a` tag with a `href` attribute pointing to the corresponding social media page. The `a` tag has a children `FontAwesomeIcon` component, which is already imported.

The `FontAwesomeIcon` component takes 2 props:

- `icon`: The icon to be displayed. In this case, you should use the `icon` prop from the `social` object.
- `size`: The size of the icon. You can use the `2x` value.

You can check below an example of how to render it:

b) **internal links to the Projects section and Contact Me section**

Each link should ia an `a` tag. Each `a` tag should have as children the name of the section: "Contact Me" and "Projects".
When clicking on the link, the url shows the corresponding section. For example, when clicking on the "Contact Me" link, the url path should be `/#contact-me`.
Also, the click scrolls to the corresponding section with a smooth animation.

### **Landing Section**

The `LandingSection.js` file implements the below UI to provide a landing section for the app with an avatar, a greeting and a brief role description.

### **Projects Section**

The `ProjectsSection` component defines a `projects` array with the data for each project and that information is passed to each `Card` component as props.

The `Card.js` component implements the UI for the card using
the following components from Chakra UI:

- HStack,
- VStack,
- Image,
- Heading,
- Text,

### **Contact Me**

The form contains 4 input fields: name, email address, type of enquiry and message.

a) **The configuration of `useFormik` hook is set passing an object with 3 properties**: `initialValues`, `onSubmit` and `validationSchema`.

The `initialValues` object have the following fields:

- `firstName`: The name of the user
- `email`: The email of the user
- `type`: 'hireMe' | 'openSource' | 'other'
- `comment`: A message from the user

The `onSubmit` function performs an API call by using the `submit` helper from `useSubmit` hook.

The `validationSchema` is a Yup schema that validates the form fields. The validation rules are as follows:

- `firstName`: required field. Otherwise, the error message is "Required".
- `email`: required field and a valid email. If empty, the error message is "Required". If not a valid email, the error message is "Invalid email address".
- `type`: Optional field
- `comment`: required field and with a minimum of 25 characters. If empty, the error message is "Required". If less than 25 characters, the error message is "Must be at least 25 characters".

b) **The `Input` components from Chakra UI are controlled components**.

`useFormik` hook returns an object with a function called `getFieldProps` that when called, returns an object with the necessary props to make the input controlled.

c) **Each field shows an error message when the field is touched and the validation fails**.

Each field is grouped in a `FormControl` component. The `FormControl` component takes a `isInvalid` prop that is used to show the error message.

The `isInvalid` prop is `true` when the field is touched and the validation fails.

The `FormErrorMessage` component from Chakra UI displays the corresponding error message if the `isInvalid` prop from the parent `FormControl` component is true.

d) **The `form` onSubmit prop is connected with Formik's `handleSubmit` function.**

The default HTML form behaviour is prevented when a submission occurs.

e) **An alert is shown when the form is submitted successfully**.

The `response` object listens to the changes from the `useSubmit` hook. Also, when the form is submitted, a loading indicator is shown in the Submit button. You can use the `isLoading` property from the `useSubmit` hook.

The `useSubmit` hook is implemented in a way that 50% of the times it will return a successful response and 50% of the times it will return an error response.

The `response` object from the API has 2 properties:

- `type`: 'success' | 'error'
- `message`: Extra contextual information about the response

The `useAlertContext` hook shows the alert. The hook returns a function named `onOpen` which is called to display it.

In the `alertContext.js` file the `onOpen` function expects a few arguments.

If the response is successful, the alert displays in its content the first name of the user, according to the value typed in the form 1st field.

The form is reset if the response is successful using the `resetForm` function from the object returned from the `useFormik` hook.

![](screenshots/header_animation.gif)
