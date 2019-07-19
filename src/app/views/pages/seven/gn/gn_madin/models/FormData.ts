export interface FormData {
    controlName: string,
    controlType: string,
    valueType?: string,
    currentValue?: string,
    placeholder?: string,
    options?: Array<{
      optionName: string,
      value: string,
     }>,
    validators?: {
      required?: boolean,
      minlength?: number,
      maxlength?: number,
    },
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
  ]
export interface Gn_Madi  {
  aud_esta: string,
  aud_usua: string,
  aud_ufac: string,
  emp_codi: number,
  mad_cont: number,
  pro_codi: string,
  mad_tabl: string,
  mad_camp: string,
  mad_esta: string,
  mad_deta: string,
  mad_tabd: string,
  mad_camd: string,
  mad_tran: string,
  con_codi: number,
  mad_reun: string,
  mad_cova: number,
  mad_tadm: string,
  mad_tada: string,
  Gn_Dmadi : Gn_Dmadi[];

}
export interface Gn_Dmadi extends ColumnSchema   {
  aud_esta:string,
  aud_usua:string,
  aud_ufac:Date,
  emp_codi:number,
  mad_cont:number,
  dma_cont:number,
  dma_desc:string,
  dma_requ:string,
  dma_tipo:string,
  dma_orde:number,
  dma_posx:number,
  dma_posy:number,
  dma_anch:number,
  dma_list:string,
  dma_lupa:string,
  dma_titu:string,
  dma_tica:string,
  dma_camp:string,
  dma_deca:string,
  dma_orig:string,
  dma_cons:string,
  dma_line:number,
  dma_calm:string,
  dma_long:number,
  dma_fila:number,
  dma_colt:string,
  dma_femp:string,
  dma_cemp:string,
  dma_care:string,
  dma_cref:string,
  dma_tipd:string,
  dma_deta:string,
}

export interface ColumnSchema {
  Table_Catalog: string,
  Table_Name: string
  Column_Name: string,
  Data_Type: string,
  Chracter_Max: number,
  Numeric_Precision: number,
  Is_Nullable: string
}
export interface ToTransaction {
  Retorno:number,
  TxtError:number
}