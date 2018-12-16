# OpenTender

OpenTender is a decentralized application which allows different organizations, such as government, to release tenders, with the help of HyperLedger. OpenTender prevents organizations from tampering or looking into the proposed amount of the contracts submitted by various contractors, for a given tender under a fixed deadline.
OpenTender brings fairness and decentralization in the end-to-end process of tenders.

---

## How OpenTender works?
- An organization issues a tender.
- Contractors are asked to submit the proposals of their applications/contracts onto the server until a fixed deadline.
- The proposed amounts are hashed using MD5.
- These hashes get stored, mapped with the Contractor's Company ID.
- Once the deadline is over, the system chooses the best proposal.
- The result is announced to everyone.

## Future Scope of OpenTender
- [ ] Contractor authentication, on the portal, and verification by the government agencies.
- [ ] Increase the scalability.
- [ ] Smart contracts between the government and the contractor, on the portal.
- [ ] More advanced algorithm for the selection process of the proposal.


## Developers and Maintainers
The project is developed and maintained by
- Jogendra Kumar ([jogendra](https://github.com/jogendra))
- Ishaan Abhinav ([ishaanabhinav](https://github.com/ishaanabhinav))
- Anurita Srivastava ([AnuritaS](https://github.com/AnuritaS))
<table>
<tr>
<td>
  <img src="https://avatars1.githubusercontent.com/u/20956124?s=150&v=4"/>
     
     Jogendra Kumar

<p align="center">
<a href = "https://github.com/jogendra"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/imjog24"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com/in/jogendrasingh24/"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>

<td>
     <img src="https://avatars1.githubusercontent.com/u/13931850?s=150&v=4"/>
     
     Ishaan Abhinav 

<p align="center">
<a href = "https://github.com/ishaanabhinav"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/ishaanabhinav"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com/in/ishaanabhinav"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>

<td>
     <img src="https://avatars1.githubusercontent.com/u/18022942?s=150&v=4" />
     
     Anurita Srivastava

<p align="center">
<a href = "https://github.com/AnuritaS"><img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36"/></a>
<a href = "https://twitter.com/Anurita_S"><img src = "https://www.shareicon.net/download/2016/07/06/107115_media.svg" width="36" height="36"/></a>
<a href = "https://www.linkedin.com/in/anurita-srivastava/"><img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36"/></a>
</p>
</td>
</tr>
</table>

## The problems OpenTender solves
Our aim is to decentralize the tender process in India, with the help of Blockchain technology-

- Minimize corruption at all stages in the government process of issuing tender.

- Centralize storing of data which leads to malpractices.

- Government officials not being held accountable due to non existence of transparency.

  
# Instructions to run

- Clone the repo `https://github.com/jogendra/OpenTender.git`
## Running the API Backend
- Goto the API directory
- First install the [Hyperledger composer](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html). Then install the [development environment](https://hyperledger.github.io/composer/latest/installing/development-tools.html).
- `composer archive create -t dir -n .`
- `composer network install --card PeerAdmin@hlfv1 --archiveFile api@0.0.1.bna`
- `composer network start --networkName api --networkVersion 0.0.1 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file networkadmin.card`
- `composer card import --file networkadmin.card` 
- `composer-rest-server -c admin@api -n always -u true -d y -w true`
- Goto `http://localhost:3000/explorer` to explored the REST API

# Running the Front end
Front End: https://jogendra.github.io/OpenTender/
- Make sure you are running the API Backend 
- Open the `index.html` file
- The front end is up and running 

## Demo
UI is live here: https://jogendra.github.io/OpenTender/<br>
For more visualization, please refer [PPT here](https://docs.google.com/presentation/d/1vqxMGqF9bOw0UcSOwBrSSTZnbY4nBoANwORb9x7Rjtg/edit?usp=sharing).


## License

This project is available under the MIT license. See the [LICENSE](LICENSE) file for more info.
