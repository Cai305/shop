import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomCustomField extends Schema.Component {
  collectionName: 'components_custom_custom_fields';
  info: {
    name: 'Custom_field';
    displayName: 'Custom field';
    icon: 'archway';
  };
  attributes: {
    title: Attribute.String;
    required: Attribute.Boolean;
    options: Attribute.String;
  };
}

export interface CustomSubCategory extends Schema.Component {
  collectionName: 'components_custom_sub_categories';
  info: {
    displayName: 'subCategory';
    icon: 'bulletList';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.custom-field': CustomCustomField;
      'custom.sub-category': CustomSubCategory;
    }
  }
}
