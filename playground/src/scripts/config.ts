// import { errorStepDisplayer } from 'gincko/plugins';
import { Configuration } from 'gincko/core';

export default <Configuration>{
  root: 'start',
  steps: {
    start: {
      fields: {
        email: {
          type: 'string',
          component: 'Textfield',
          required: true,
          submit: true,
          // value: 'test',
          messages: {
            validation(value) {
              return (value.trim() === '' ? 'Please enter a valid email' : null);
            },
          },
          componentProps: {
            debounceTimeout: 1000,
            autocomplete: 'off',
            transform(value) {
              return [value.replace(/a/g, 'e')];
            },
          },
        },
        mess: {
          type: 'null',
          component: 'Message',
          label: '{{email}} - {{test}}',
        },
        dynamic: {
          type: 'dynamicObject',
          component: 'DynamicObject',
          componentProps: {
            allowedPatterns: [/test/],
            addButtonProps: {
              label: 'ADD',
            },
          },
          fields: {
            test: {
              type: 'string',
              component: 'Textfield',
            },
          },
        },
        next: {
          type: 'boolean',
          component: 'Button',
          label: 'Next',
          submit: true,
          componentProps: {
            modifiers: 'disabled',
          },
        },
      },
      nextStep: 'end',
    },
    end: {
      fields: {
        address: {
          type: 'string',
          component: 'Textfield',
        },
        city: {
          type: 'string',
          component: 'Textfield',
        },
        submit: {
          submit: true,
          type: 'boolean',
          component: 'Button',
          label: 'Submit',
        },
      },
      submit: true,
    },
    error: {
      fields: {
        msg: {
          type: 'null',
          component: 'Message',
          label: 'error',
        },
        next: {
          type: 'boolean',
          component: 'Button',
          label: 'Next',
          submit: true,
          componentProps: {
            modifiers: 'disabled',
          },
        },
      },
    },
  },
  // plugins: [
  //   errorStepDisplayer({ setActiveStep: () => '', stepId: 'error' }),
  //   ((engine) => {
  //     engine.on('userAction', (userAction, next) => {
  //       if (userAction?.fieldId === 'city') {
  //         throw new Error('ok');
  //       }
  //       const currentStep = engine.getCurrentStep();
  //       if (userAction !== null && currentStep !== null) {
  //         currentStep.fields[1].options.formValues = {
  //           ...engine.getValues(),
  //           [userAction.fieldId]: userAction.value,
  //         };
  //         engine.setCurrentStep(currentStep);
  //       }
  //       return next(userAction);
  //     });
  //   }) as Plugin,
  // ],
};
