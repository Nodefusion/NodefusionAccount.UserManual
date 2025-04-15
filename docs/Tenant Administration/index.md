# Tenant Administration

## Users - Single Sign on

### Microsoft Entra

1. Add Nodefusion Account to Microsoft Entra Enterprise Applications - this can be done in a way that administrator from your Tenant Registers on [Nodefusion Account](https://login.nodefusion.com/) - prompt should pop up

   ![image.png](/attachments/image-9c12a6c0-0e01-49c8-94d2-e0b43609f9fb.png)
1. Configure scope to users which you want to be able to access by defining Users and Groups in the Nodefusion Account Enterprise Application

## Users - SCIM Provisioning

### Enable SCIM User Provisioning in Nodefusion Account

1. Have a permission role for Tenant Admin on Nodefusion Account
1. Go to Nodefusion Account, and choose manage your Tenant link
1. In the left menu, navigate to SCIM and click Create New
1. Choose your login provider (Microsoft) and enter your internal notes about scim config if needed
1. Click Create and copy your Generated APIKey
1. Then go back to list to confirm your key is on the list

### Configure Microsoft Entra - SCIM Provisioning

1. Go to Microsoft Entra, Enterprise Applications, choose + New Application on the ribbon
1. Then from 'Browse Microsoft Entra Gallery' choose + Create your own application on the ribbon
1. Enter Nodefusion Account SCIM and choose: _**Integrate any other application you don't find in the gallery (Non-gallery)**_
1. Open Nodefusion Account SCIM - and then Provisioning - then again Provisioning
    1. Set Provisioning Mode to Automatic
    1. For Tenant URL enter: [https://login.nodefusion.com/scim/v2](https://login.nodefusion.com/scim/v2)
    1. Paste your previously generated APIKey under Secret Token
    1. Click Test Connection and then if successful, Click Save in the ribbon
1. Then after saving url and secret, under Mappings you should
    1. Disable provisioning of Entra ID Groups
    1. Edit User mappings; externalId as matching attribute:
![image.png](/attachments/image-8b64e991-a0d8-4c1c-9256-2ad1fe0b4a68.png)
_You should edit externalId mapping to map objectId source attribute and to be set as matching attribute.
Mappings other than this five from picture should be deleted_

After configuring mappings you can check if provisioning works by using provision on demand functionality on Microsoft Entra. After that you can proceed to configure which part of your directory will be synced to Nodefusion Account, how often and so on.
