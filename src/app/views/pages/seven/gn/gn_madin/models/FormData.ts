export interface FormData {
    controlName: string;
    controlType: string;
    valueType?: string;
    currentValue?: string;
    placeholder?: string;
    options?: Array<{
      optionName: string;
      value: string;
     }>;
    validators?: {
      required?: boolean;
      minlength?: number;
      maxlength?: number;
    };
  }

  export const MockForm: FormData[] = [
    {
      controlName: 'Nombre',
      controlType: 'text',
      valueType: 'text',
      placeholder: 'Ingrese Nombre',
      validators: {
        required: true,
        minlength: 5
      }
    },

    {
      controlName: 'Tipo de documento',
      placeholder: 'Seleccione tipo de documento',
      controlType: 'select',
      options: [{
        optionName: 'Cédula',
        value: 'CC'
      }, {
        optionName: 'Pasaporte',
        value: 'P'
      }],
      validators: {
        required: true
      }
    },
    {
      controlName: 'Cedula',
      controlType: 'text',
      valueType: 'text',
      placeholder: 'Ingrese Número de identificación',
      validators: {
        required: true,
        minlength: 5
      }
    },
   
    {
      controlName: 'Teléfono',
      placeholder: 'Ingrese teléfono',
      valueType: 'tel',
      controlType: 'text',
      validators: {
        required: true,
        minlength: 7,
        maxlength: 10
      }
    },
    {
      controlName: 'Email',
      valueType: 'email',
      placeholder: 'Ingrese email',
      controlType: 'text',
      validators: {
        required: true
      }
    },
    {
      controlName: 'Genero',
      placeholder: 'Seleccione género',
      controlType: 'select',
      options: [{
        optionName: 'Femenino',
        value: 'F'
      }, {
        optionName: 'Masculino',
        value: 'M'
      }],
      validators: {
        required: true
      }
    },
    {
      controlName: 'Vehicle you own',
      placeholder: 'Select vehicle',
      controlType: 'radio',
      options: [{
        optionName: 'opcion1',
        value: 'bike'
      }, {
        optionName: 'opcion2',
        value: 'car'
      }],
      validators: {
        required: true
      }
    }
  ];