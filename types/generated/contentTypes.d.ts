import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginStrapiStripeSsProduct extends Schema.CollectionType {
  collectionName: 'strapi-stripe_ss-product';
  info: {
    tableName: 'StripeProduct';
    singularName: 'ss-product';
    pluralName: 'ss-products';
    displayName: 'Product';
    description: 'Stripe Products';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    slug: Attribute.UID<'plugin::strapi-stripe.ss-product', 'title'> &
      Attribute.Required &
      Attribute.Unique;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    price: Attribute.Decimal & Attribute.Required;
    currency: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    productImage: Attribute.Media & Attribute.Required;
    isSubscription: Attribute.Boolean & Attribute.DefaultTo<false>;
    interval: Attribute.String;
    trialPeriodDays: Attribute.Integer;
    stripeProductId: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    stripePriceId: Attribute.String &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    stripePlanId: Attribute.String &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    stripePayment: Attribute.Relation<
      'plugin::strapi-stripe.ss-product',
      'oneToMany',
      'plugin::strapi-stripe.ss-payment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::strapi-stripe.ss-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::strapi-stripe.ss-product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginStrapiStripeSsPayment extends Schema.CollectionType {
  collectionName: 'strapi-stripe_ss-payment';
  info: {
    tableName: 'StripePayment';
    singularName: 'ss-payment';
    pluralName: 'ss-payments';
    displayName: 'Payment';
    description: 'Stripe Payment';
    kind: 'collectionType';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    txnDate: Attribute.DateTime & Attribute.Required;
    transactionId: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    isTxnSuccessful: Attribute.Boolean & Attribute.DefaultTo<false>;
    txnMessage: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 5000;
      }>;
    txnErrorMessage: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    txnAmount: Attribute.Decimal & Attribute.Required;
    customerName: Attribute.String & Attribute.Required;
    customerEmail: Attribute.String & Attribute.Required;
    stripeProduct: Attribute.Relation<
      'plugin::strapi-stripe.ss-payment',
      'manyToOne',
      'plugin::strapi-stripe.ss-product'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::strapi-stripe.ss-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::strapi-stripe.ss-payment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAbCreditAbCredit extends Schema.CollectionType {
  collectionName: 'ab_credits';
  info: {
    singularName: 'ab-credit';
    pluralName: 'ab-credits';
    displayName: 'AbCredit';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_id: Attribute.String;
    balance: Attribute.Decimal &
      Attribute.SetMinMax<{
        min: 0;
      }> &
      Attribute.DefaultTo<10000>;
    username: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ab-credit.ab-credit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ab-credit.ab-credit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCartCart extends Schema.CollectionType {
  collectionName: 'carts';
  info: {
    singularName: 'cart';
    pluralName: 'carts';
    displayName: 'cart';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_id: Attribute.Integer;
    cart_product: Attribute.JSON;
    username: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::cart.cart', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiCheckoutCheckout extends Schema.CollectionType {
  collectionName: 'checkouts';
  info: {
    singularName: 'checkout';
    pluralName: 'checkouts';
    displayName: 'checkout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    firstname: Attribute.String;
    lastname: Attribute.String;
    email: Attribute.Email;
    address: Attribute.Text;
    country: Attribute.String;
    postcode: Attribute.BigInteger;
    phone: Attribute.BigInteger;
    note: Attribute.Text;
    shippingMethod: Attribute.String;
    totalAmount: Attribute.Decimal;
    chargeTotal: Attribute.Decimal;
    invoicenumber: Attribute.String;
    customerId: Attribute.String;
    nearestBranch: Attribute.String;
    products: Attribute.JSON;
    deliveryAddress: Attribute.String;
    city: Attribute.String;
    deliveryCountry: Attribute.String;
    deliveryFirstname: Attribute.String;
    deliveryLastname: Attribute.String;
    deliveryNote: Attribute.Text;
    deliveryPhone: Attribute.BigInteger;
    DeliveryPostCode: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checkout.checkout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checkout.checkout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCollectionCollection extends Schema.CollectionType {
  collectionName: 'collections';
  info: {
    singularName: 'collection';
    pluralName: 'collections';
    displayName: 'collection';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collection_name: Attribute.String;
    collection_image1: Attribute.String;
    collection_image2: Attribute.String;
    from_price1: Attribute.Decimal;
    from_price2: Attribute.Decimal;
    collection_image3: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::collection.collection',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiComboCombo extends Schema.CollectionType {
  collectionName: 'combos';
  info: {
    singularName: 'combo';
    pluralName: 'combos';
    displayName: 'combo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_image: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::combo.combo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::combo.combo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreditCredit extends Schema.CollectionType {
  collectionName: 'credits';
  info: {
    singularName: 'credit';
    pluralName: 'credits';
    displayName: 'credit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    username: Attribute.String;
    amount: Attribute.Decimal;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::credit.credit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::credit.credit',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHeroVideoHeroVideo extends Schema.CollectionType {
  collectionName: 'hero_videos';
  info: {
    singularName: 'hero-video';
    pluralName: 'hero-videos';
    displayName: 'hero_video';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    video: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hero-video.hero-video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hero-video.hero-video',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHerosBunnerHerosBunner extends Schema.CollectionType {
  collectionName: 'heros_bunners';
  info: {
    singularName: 'heros-bunner';
    pluralName: 'heros-bunners';
    displayName: 'heros_bunner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner_title: Attribute.String;
    image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::heros-bunner.heros-bunner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::heros-bunner.heros-bunner',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeCategoryHomeCategory extends Schema.CollectionType {
  collectionName: 'home_categories';
  info: {
    singularName: 'home-category';
    pluralName: 'home-categories';
    displayName: 'home-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    category_name: Attribute.String;
    category_image: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-category.home-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-category.home-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNavbarNavbar extends Schema.CollectionType {
  collectionName: 'navbars';
  info: {
    singularName: 'navbar';
    pluralName: 'navbars';
    displayName: 'navbar';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Attribute.Media;
    companyName: Attribute.String;
    MEN_link: Attribute.String;
    Standard_Range_link: Attribute.String;
    Womanlink: Attribute.String;
    MEN: Attribute.Media;
    Woman: Attribute.Media;
    Standard_Range: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::navbar.navbar',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    name: 'product';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    product_image: Attribute.Media;
    product_id: Attribute.String;
    product_title: Attribute.String;
    product_description: Attribute.Text;
    product_code: Attribute.String;
    product_fabric: Attribute.String;
    product_varient: Attribute.Enumeration<
      ['Ex:', 'morning', 'noon', 'day', 'night']
    >;
    product_material: Attribute.String;
    product_price: Attribute.Decimal;
    product_primary_class: Attribute.String;
    product_category: Attribute.String;
    product_subcategory: Attribute.String;
    product_subclass: Attribute.String;
    product_Other_Image: Attribute.Media;
    product_color: Attribute.String;
    product_type: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTproductTproduct extends Schema.CollectionType {
  collectionName: 'tproducts';
  info: {
    singularName: 'tproduct';
    pluralName: 'tproducts';
    displayName: 'tproduct';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    price: Attribute.Decimal;
    tag: Attribute.Boolean & Attribute.Required;
    category: Attribute.String;
    image: Attribute.Media;
    subCategory: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tproduct.tproduct',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tproduct.tproduct',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWatchlistWatchlist extends Schema.CollectionType {
  collectionName: 'watchlists';
  info: {
    singularName: 'watchlist';
    pluralName: 'watchlists';
    displayName: 'Watchlist';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    product_name: Attribute.String;
    user_id: Attribute.String;
    status: Attribute.String;
    product_quantity: Attribute.String;
    product_image: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::watchlist.watchlist',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::watchlist.watchlist',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::strapi-stripe.ss-product': PluginStrapiStripeSsProduct;
      'plugin::strapi-stripe.ss-payment': PluginStrapiStripeSsPayment;
      'api::ab-credit.ab-credit': ApiAbCreditAbCredit;
      'api::cart.cart': ApiCartCart;
      'api::checkout.checkout': ApiCheckoutCheckout;
      'api::collection.collection': ApiCollectionCollection;
      'api::combo.combo': ApiComboCombo;
      'api::credit.credit': ApiCreditCredit;
      'api::hero-video.hero-video': ApiHeroVideoHeroVideo;
      'api::heros-bunner.heros-bunner': ApiHerosBunnerHerosBunner;
      'api::home-category.home-category': ApiHomeCategoryHomeCategory;
      'api::navbar.navbar': ApiNavbarNavbar;
      'api::product.product': ApiProductProduct;
      'api::tproduct.tproduct': ApiTproductTproduct;
      'api::watchlist.watchlist': ApiWatchlistWatchlist;
    }
  }
}
