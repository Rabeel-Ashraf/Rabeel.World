# Formspree Setup Instructions

To make the contact form functional, you need to:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form ID (it looks like "xpwzqbzl")
3. In `src/components/Contact.tsx`, replace "xpwzqbzl" on line 16 with your actual form ID:

```tsx
const [state, handleSubmit] = useForm("YOUR_FORM_ID_HERE");
```

The form will then send emails directly to your specified email address when users submit it.

## Alternative: Remove Formspree (simpler approach)

If you prefer not to use Formspree, you can:

1. Remove the `@formspree/react` import
2. Replace the form submission with a simple mailto: link or show a message

Current form features:
- ✅ Success toast notifications
- ✅ Form validation
- ✅ Loading states
- ✅ Email forwarding (once Formspree is configured)