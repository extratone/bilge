# Taio Image Uploader and Snap.as
- [GitHub Issue](https://github.com/extratone/bilge/issues/315)
- [Video Demo](https://user-images.githubusercontent.com/43663476/162647696-bf9cd436-21bf-491f-874d-28aca6e55a6d.MOV)
- [Using Taio’s new Image Uploader with Snapas via API - Development / API - Discuss Write.as](https://discuss.write.as/t/using-taio-s-new-image-uploader-with-snapas-via-api/5231)

![Image Uploader Configuration](https://i.snap.as/H4kiVJ7m.image)

<video controls>
  <source src="https://user-images.githubusercontent.com/43663476/162647696-bf9cd436-21bf-491f-874d-28aca6e55a6d.MOV">
</video>

## Social

### Discuss.Writeas
[Using Taio’s new Image Uploader with Snapas via API - Development / API - Discuss Write.as](https://discuss.write.as/t/using-taio-s-new-image-uploader-with-snapas-via-api/5231)
Using Taio’s new Image Uploader with Snapas via API
The iOS/iPadOS/macOS markdown-based writing app [**Taio**](https://apps.apple.com/us/app/taio-markdown-text-actions/id1527036273) recently added a very impressive [image uploader utility](https://github.com/cyanzhong/Image-Uploader) and I managed to figure out how to use it with [the Snap.as API](https://developers.snap.as/docs/api)!

![Image Uploader Configuration](https://i.snap.as/H4kiVJ7m.image)

#### Configuration
| Field            | Content                                             |
|:----------------:|:---------------------------------------------------:|
| API URL          | https://snap.as/api/photos/upload                   |
| HTTP Method      | POST                                                |
| HTTP Headers     | Authorization: 00000000-0000-0000-0000-000000000000 |
| HTTP Body        | (Empty)                                             |
| Form File Name   | file                                                |
| JSON Result Path | data.url                                            |

Here’s [**a rough, single-take video demo**](https://user-images.githubusercontent.com/43663476/162647696-bf9cd436-21bf-491f-874d-28aca6e55a6d.MOV).

I’m brand brand new to API, generally, so please do let me know if I can improve this. For more details, see [this GitHub Issue](https://github.com/extratone/bilge/issues/315).

## References

- [Image-Uploader/DOCS.md at main · cyanzhong/Image-Uploader](https://github.com/cyanzhong/Image-Uploader)
- [Snap.as API Documentation](https://tilde.town/~extratone/docs/snapas/docs/api/index.html) (Mirror)
- [Snap.as API Documentation](https://developers.snap.as/docs/api)