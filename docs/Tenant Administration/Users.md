# User Management

## Nodefusion Account Tenant User list

1. Open Tenant administration on [Nodefusion Account](https://login.nodefusion.com/Tenant/Users) if you are Tenant Administrator
1. Navigate to Users on navigation menu
1. You have a list of your Tenant Users sorted by Display Name (DisplayName, Email, Username, Enabled)

## View User Details

1. By clicking on a user's Display Name you can open a Details page of the selected user
1. There you can view the details data (Id, DispayName, Email, Username, Enabled, TenantAdmin)

## Activating / Deactivating User

- By changing Enabled checkbox and clicking Save button you can activate/deactivate user
- Deactivated user will not be able to login and use Nodefusion Account nor any app that uses it as the Login Provider

:::warning
Keep in mind that if you have SCIM configured and working, and if it includes the user in a scope for sync; the Enabled status will sync from your SCIM provider so your change will probably be overwritten.
:::

## Assign / Remove Tenant Admin

- By changing Tenant Administrator checkbox and clicking Save button you can assign or remove the Tenant Admin rights from the user

:::note
If the user is the only active tenant administrator those fields will be disabled and Save button will be hidden to prevent Tenant lockout. SCIM does not have any impact on Tenant Administration access.
:::
