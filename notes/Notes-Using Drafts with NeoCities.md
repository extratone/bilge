# Notes-Using Drafts With NeoCities
- [Using Drafts with NeoCities · Issue #297 · extratone/bilge](https://github.com/extratone/bilge/issues/297)
- [WTF](https://davidblue.wtf/drafts/)
- [**NeoCities Action Group**](https://actions.getdrafts.com/g/1uF)  | Action Directory
- [WebDAV Service Action Steps](https://docs.getdrafts.com/docs/actions/steps/services#webdav) | Drafts Documentation
- [TAD-Auto Document Action Group](https://www.thoughtasylum.com/taagd/#tad-auto-document-action-group)


[Services - Drafts User Guide](https://docs.getdrafts.com/docs/actions/steps/services#webdav)

## WebDAV
iOS macOS
*Create and modify files on a WebDAV enabled server.*

### OPTIONS

**Account Identifier**: A friendly name for the associated credentials used for this action. The first time the action is run, the user will be prompted to enter the WebDAV server URL, and their username/password for the connection. This information will be stored for future use and can be reset in Settings > Credentials. The identifier can be any short string, but should help identify the intended server - like possibly a fragment of the host name. All WebDAV actions with the same account identifier will use the same set of credentials, so use different identifiers to target different servers/accounts.

**Name**: Template for file name, including extension.

**Path**: Template for folder path, relative to root directory. For local files, this is the app “Documents” folder, for iCloud Drive it is the “Drafts 5” folder in iCloud Drive.

**Template**: Template for the content of the file.

**Write Type**:
**create**: Create a new file. If an existing file already exists at the location, **create as new file with a number suffix added**.
**replace**: Create new file, overwriting an existing if it exists.
**prepend**: Prepend template content at the beginning of the file. Create the file if it does not already exist.
**append**: Append template content at the end of the file. Create the file if it does not already exist.