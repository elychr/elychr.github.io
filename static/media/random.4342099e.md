## Recursively rename files of extension
`for /R %x in (*.*) do ren "%x" *.webp`

## Keep PowerShell open on script
`powershell.exe -NoExit PARAMS`

## adb listen - React Native 
`adb logcat *:S ReactNative:V ReactNativeJS:V`

## Access Exchange Online in Powershell
`Connect-ExchangeOnline -UserPrincipalName MAILBOX -ShowProgress $true`

## MongoDB 
`mongodump -db OLDDATABASE`<br/>
`mongorestore -db NEWDATABASE dump/OLDDATABASE`
