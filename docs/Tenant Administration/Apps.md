# Apps Management

## Nodefusion Account Tenant Applications

1. Open Tenant administration on [Nodefusion Account](https://login.nodefusion.com/Tenant/Apps) if you are a Tenant Administrator
1. Navigate to **Applications** in the navigation menu
1. You will see a list of applications for your tenant (Application, Enabled, Actions)
:::note
The list is read-only. You cannot enable or disable applications from this page.
:::
:::warning
Keep in mind that if you have SCIM configured and working, Nodefusion Account will also provision the create/update automatically to every enabled application.
:::

## Actions for Enabled Applications

For each enabled application, you have two available actions:

- **Provision Users**: Initiates the provisioning process for all users in your tenant to the selected application. This action creates a request for each user, which is processed in the background. The time required depends on the number of users and may take several minutes.
- **Update Users**: Triggers an update of user data for all users in your tenant to the selected application. Like provisioning, this is processed in the background and may take several minutes.

### Action Processing and Retries

- Both actions are processed asynchronously. If a request is not successfully completed on the first attempt, it will be automatically retried according to the following schedule (up to 10 attempts):
  - 2 minutes
  - 5 minutes
  - 10 minutes
  - 20 minutes
  - 30 minutes
  - 12 hours
  - 24 hours (repeated 4 times)
- No user intervention is required for retries; the system will handle them automatically
