steps to reproduce:

broken:
* `yarn`
* `cd client/mobile`
* `eas build -p ios --local`

Says script failed, but no useful error messages in output:

```
[RUN_FASTLANE] The following build commands failed:
[RUN_FASTLANE] 	PhaseScriptExecution Upload\ Debug\ Symbols\ to\ Sentry /xxxxxx/Library/Developer/Xcode/DerivedData/myapp-aubcdasipglaieflninhycnffnxj/Build/Intermediates.noindex/ArchiveIntermediates/myapp/IntermediateBuildFilesPath/myapp.build/Release-iphoneos/myapp.build/Script-401D0719341D434CBEF1836A.sh
```


inside of `client/mobile/app.json`, if you remove the `hooks.postPublish` configuration, it will build just fine.