import { DynamicFormDefinition } from '@dynamic-forms/core';

export const createDynamicFormDefinition: () => DynamicFormDefinition = () => JSON.parse(JSON.stringify(dynamicFormDefinition));

const dynamicFormDefinition: DynamicFormDefinition = {
  template: {
    className: 'small',
  },
  children: [
    {
      key: 'registration',
      type: 'group',
      template: {
        label: 'Registration',
        validation: {
          password: true,
        },
      },
      validators: {
        password: {
          type: 'equal',
          parameters: {
            keys: [ 'password', 'confirmPassword' ],
          },
          message: 'Confirm password needs to equal password',
        },
      },
      children: [
        {
          key: 'email',
          type: 'control',
          template: {
            label: 'Email',
            input: {
              type: 'textbox',
              inputType: 'email',
              placeholder: 'Enter your email',
            },
            validation: {
              required: true,
              email: true,
            },
          },
        },
        {
          key: 'password',
          type: 'control',
          template: {
            label: 'Password',
            input: {
              type: 'textbox',
              inputType: 'password',
              placeholder: 'Enter your password',
              pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{6,20}$',
            },
            validation: {
              required: true,
              pattern: true,
            },
          },
          suffixAddOn: {
            reference: 'passwordSuffixAddOn',
          },
        },
        {
          key: 'confirmPassword',
          type: 'control',
          template: {
            label: 'Confirm Password ',
            input: {
              type: 'textbox',
              inputType: 'password',
              placeholder: 'Confirm your password',
              pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{6,20}$',
            },
            validation: {
              required: true,
              pattern: true,
            },
          },
          suffixAddOn: {
            reference: 'passwordSuffixAddOn',
          },
        },
      ],
    },
  ],
  footerActions: [
    {
      id: 'action-submit',
      type: 'button',
      template: {
        type: 'submit',
        label: 'Submit',
      },
      expressions: {
        disabled: 'data.root.status !== \'VALID\'',
      },
    },
  ],
  references: {
    passwordSuffixAddOn: {
      type: 'icon',
      template: {
        type: 'button',
        color: 'inputAction',
        action: 'toggleTextboxAsTextType',
      },
      expressions: {
        icon: 'data.parent.input.inputTypeForced ? "visibility" : "visibility_off"',
        label: 'data.parent.input.inputTypeForced ? "Hide password" : "Show password"',
        disabled: 'data.parent.disabled',
      },
    },
  },
} as any;


