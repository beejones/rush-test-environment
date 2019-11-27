## Install

npm install -g @microsoft/rush

rush install

## Build

rush build

## test

npm run start
use postman
HTTPS POST /api/v1/PortableIdentities
Host: http://localhost:8080/api/v1.0 
Authorization: Basic ey…ere 
Accept: application/json 
Content-Type: application/json 

{
	"tenantGuid": "n/a",
	"type": ["VerifiableCredential", "employee"],
	"credentialSubject": {
		"id": "did:example:ebfeb1f712ebc6f1c276e12ec21"
	}
}


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the [MIT](LICENSE.txt) License.
