'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "096cd123ba5ea4744642cc4b02c0c019",
".git/config": "9c414be52823edd8b5b8049c1b1975ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e57cb1f03b417813f0396729397a7e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6f5fcd00af6b3d708a7b63aa107ba2fb",
".git/logs/refs/heads/master": "6f5fcd00af6b3d708a7b63aa107ba2fb",
".git/logs/refs/remotes/origin/master": "5abd2aa5acd61b93d488ac864e49ff8f",
".git/objects/00/054e5f36dfbe12d71495ca084ff3ae0ab9a5b5": "57a8185e236fdde8a2f7f5c43ce4ef5d",
".git/objects/01/560b04592d6ce77d366ae8d6c1101ffdf78138": "66a9dad89b8605b26544ff8bfc024ae3",
".git/objects/04/0e0a0a3c00fb3535470c1735fd38ce64cd73f0": "d89e4a2db5fe836a5031f857e274a8e2",
".git/objects/04/77668c53975fa07b936b13cd0e3c164d395991": "96fa37375d7728be7b7d97c6a493d7ee",
".git/objects/06/22d1ccafae65cabf57a1a26bccbca2a91d7f5b": "4d39309bd5597b3276f18952f5adee57",
".git/objects/07/67b5102eb4887cd09416b83f578fd3f4f3682c": "3e6f91584a411fc2ed7778221de6ab5c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/db4cfe2fc340550dba15386a8c54953266edc8": "f9efc9bb5b5863ad6b419549597531bc",
".git/objects/0a/e1abafe2c4cc68cf137b8d476a636719375efa": "1c2bbb2ec0084e059109224cde69899d",
".git/objects/0b/5a53e4bf22e874a6acdca5d87d650bf11e8a51": "357429a32a56da0fc124f0d43b033508",
".git/objects/0b/5ed6cd7b2249aadbe51e212fd14219e2756df8": "b3b72fe031a7e2e17c05000dc9eaf570",
".git/objects/0b/a534a0e5798a0ff97fa915dba7bdd00794d669": "a7639c25d3eedc94a44d05d93d965541",
".git/objects/0c/e088208a771f1831a46a3d303aef21ccff8449": "ee75477d7ea208f8ce63d90b25160f56",
".git/objects/0c/ea0439fd9de7ce60772a64c9a785007024f57f": "078b67b156194fa994bffd05f66cbe99",
".git/objects/0d/5f6150039c9d86c367720d4f357ae872f8da5a": "0846f754d159762d8ca558748b857875",
".git/objects/0d/d733e804c02c2877b0c0f9387159143a52ef0b": "9944206b14c65c14fd840d9f6d6f5121",
".git/objects/10/467306a90c2053b98cdda87a18c089ed3cdb28": "e7f7b9ac5cb44dd6a8dd88e01d39dfce",
".git/objects/10/a4b31beecb871f12667c8862bb942bedada3ad": "4be3e2ea1a7d7a7c73e1613f6520d424",
".git/objects/11/cfd10bf6d693bb02541243a059e57c215fe7ef": "f4432c8258efb25dcc7e055a536dd1bf",
".git/objects/14/1f2ba321ddcaa6c7aaddb9e3d72983fe0e0ea7": "fdea5ed5f1b4fd043318de06cad7f8a4",
".git/objects/15/1e9f49aaceb14bff3d18a2f978e7823702e4c9": "62ede7ef3034b2c70e78fbdda1a0165e",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/69593aebd4048d978429bb86aad9cf6173557f": "83f2db0bf1b33bb82866da0e377d4534",
".git/objects/18/31983b6bfedcf1c194da55115e9dbf73eba1d9": "4b51162128e9ee893ecb3de622f1b483",
".git/objects/18/e85f19ba7905f86a32ffa0b36226283249019d": "bdc2eed451c3459196e9c135d881f498",
".git/objects/1b/21149bf1a7c38deba28bba34a75ab9e920ea5a": "2565388508b004a7bf9fb888ebddd6a8",
".git/objects/1c/1b8f11303f1e50538d2be218258b80fe33e701": "63d83c56b62b2670c720e81e4b294ba6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/00db78de24dfe4a55fc8e75774463799f729c4": "aeafaa990af632deaaf1f4438161ef63",
".git/objects/21/60349c8f58bc845b2d93a115b3744abf280070": "9a1f12fd89b6f25fc6e62067750b6338",
".git/objects/21/74f04b95310ca07a5f38cc63f53122cb93e958": "2e1850e9088880df01d3021343bd5be1",
".git/objects/22/04c1cf0bf1cae0c9d3197fa5df1f265eb97b59": "4cefa13958a4773d34939a0d7553667a",
".git/objects/23/aaf22070f07f5baf3bfe6db597d7157bed6960": "3cc4e9cd15918aa59f03cace164e49a7",
".git/objects/24/fad598ba7cc9ca07e8f7ee4f3fc002f14210d7": "74a1e7399c4b306fe82ed30fca415fd2",
".git/objects/27/4328d8cafb67f01f47e01369b2df86980f1fe6": "1c878a85e2a3742d6f72f8d5357218d0",
".git/objects/29/cd046643aee0f430d3b80497d4b7a6caac1e06": "dd90d7cf66b6ed980b9ecf8add1d28a8",
".git/objects/29/d6d6d99b92a83ed23b45f8a7d7f55d3e5bbb65": "52decf1161fadb3d11b75f1cb82b7afb",
".git/objects/2a/b880d234417067cb3a3c575a01f1039c6211d3": "37fc310cc690caa51a3102d8716cd474",
".git/objects/2b/7a092a80db851e791d018c3ecc1c946b4e047d": "8a08429add0aeae54cf61dfbe3ca90c7",
".git/objects/2c/02ec982617b0530f10cf0eb240710a0f829bbb": "5af54231252df76658391a167c0c5ff9",
".git/objects/30/f16417d029f5ff4db2a56b0c3329d4c8325673": "ff3470449fd305fa2649ae3375e079cd",
".git/objects/32/0045ee00fb663c59b7c5c17d6ccecf30bfd0c6": "2574ab2ddf6e0e7a4ffe861d5992083e",
".git/objects/33/f7c2cb0618999df723ae789bbedb2956ea922c": "323f871b33571b80225c7f5ae8917e25",
".git/objects/34/ce1b6e7394343f266f6dcf772c5edff85dae8f": "02db560c545df9671b7fbffefae42e9f",
".git/objects/34/d25adc13b1027c3148378c8db683b6476da762": "6ad94f3928cfcfa33803639aa2481396",
".git/objects/35/0c09ba47cef4070299f8ac50f022ee3d22c6bb": "6815219fdd44b0f84039d0e8a8cf0622",
".git/objects/39/e76657ced89b3b80a4e794c9fac523ac331580": "b71d89f7b9317004296bc3e57608b3a3",
".git/objects/3a/6a747ccbf0f9cb51cadffbb45eb30b3784c7e9": "af11adab5a5cd63deb61cdc358e79711",
".git/objects/3c/9739b0ce24fa7a0c2fbe2d326367edf54e3c10": "312acc6aede4fc72c2144360faaf5050",
".git/objects/3d/a4f69a97cfbc18b96564afb297657fc51a34a9": "b217304ee19f6648e870b682db3059b0",
".git/objects/40/2cd60fafee0491527cc70426bd7d90337a0b88": "7263c9cb40df26c3ebd9818cd96aa530",
".git/objects/42/9cade1bb111bfc50f1eb883b6a6bd27f0d306a": "77e7c7c58af37aba11cfa62de375b090",
".git/objects/44/71136d833162b97f061a5adbe93a12121efae8": "95a7429528bfd96ad6d7c12795e584a4",
".git/objects/44/94e3c479223d66ec490b0156ae0af4dace17eb": "48743d0c25ed1efab50a08fb5e8c468a",
".git/objects/45/1fa6955fb48209fb41c7f3a0611bb1adc57ae5": "f6b9a114f4a0c407cddd13ab667b8991",
".git/objects/46/a34bd38931b4abb7fcbd612fd731eacac57bbe": "fef377b21b88083fa8253b3adbc6b4cf",
".git/objects/48/7729b2cd45a13b9b81da0edb29f9e8765a23bb": "de229b99eef914c7b161d53b1c53a030",
".git/objects/49/f61c56d432bcb5c6004a10340c5f0e56b23662": "9ca3a87c0e246d2de7f5f933c96d33c1",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/48f3a8cc52d82a5c9a59b64da2ac538f59fc0e": "962c1f47b405ff97e075c73cdb8754d9",
".git/objects/4c/4c13dff21453ee4eda0f4b48cabe79cfac2b3d": "edbcc4e1fe2ef058fbec363bf6de87b1",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/51/7638d01355269e37c12e9f65c5ef79f8aac1c4": "a09ee4288358b59aa1fc4fcc6e80a7a1",
".git/objects/53/1e92d857e4a4568fdc4eeeeb6d9857e2ec0cec": "a9e610e0dcb80e546048a875090dd7e2",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/54/156c3ede194cf8718c81993be2bc7087e31621": "56182af54dee25d492a7ffc30e646f6f",
".git/objects/55/546535aa4e6523a984623af75836efd471c91e": "26b3be5f8a27215644561651cc8caeea",
".git/objects/59/13d393f3e80d3722156aecf5234678e8484e45": "b0ffb2ced0f42dc759673d6236d40026",
".git/objects/59/51fbc1e1771a853e2cca2863bdbeb958f828f4": "14b6b072da070366645e787bbc6f429d",
".git/objects/5a/36ea4b0b6162feb08af5843dfd8b6da668c980": "98a095cf0e918c693f90e9d651d1c1c7",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/9a60c384f0d7f9264dec5c0931c7f02bc5bd0e": "d6d9b6b51424b35faa52569377f23b1a",
".git/objects/5e/f8bcbd57c757c4b849c6e8d8944b9fcb0d7f4d": "42332a1db7fd016a4e1e173d2a62e7d2",
".git/objects/5f/6929389365a718f70f40a152835eacb3eedccd": "8ee9c49f468e3855234ac8ad03579f35",
".git/objects/60/04c9ba2b633fea2f53aceaf302d670c35fc8d7": "21a17b56749a6df8f117af3f26160fcd",
".git/objects/60/f13cfb08307041d4bfcc9e11a384d445b5d344": "e257ee2b22059e36910c5f37907aaec9",
".git/objects/61/3edc44a4883c396187a412e51dceae67452517": "aa6335f0f1f57a02e3d637960915744b",
".git/objects/61/c3c288348b9bd01418fe5243b4530052cb7d84": "dccb5ef258f8648c2404445619b7ff14",
".git/objects/62/4c55a35010f03ec8c3af243f0c398200cc5646": "bc5e796efb70dcdf6bf79031ce8ea886",
".git/objects/62/9acc3618935dd179f05b78bf17175f3cffc7f3": "15bd68a891bd0b35376384bea4804aad",
".git/objects/62/aa46ebab33625bfff399293391372e9dcd14f7": "693681038e56393c5706ec6c2ccfa2c2",
".git/objects/62/c6e0b35c0d07b115f2ca82bf1e4dc58e40cc7f": "2f49fc1e15916e2e7e96e7d88687258e",
".git/objects/63/2b396206bdacc0ed84bf96dc76df5b0e81aa85": "8cfc0452c549f53a0cefe84933e9e39c",
".git/objects/64/29ade6ecd8c0bc61c9a02e89cf89b9fe0ab585": "be68bb6e085f850efe7b22e165db2c79",
".git/objects/67/175a78d441b153840010ece8f135afcca7701b": "f1cb593fd88a6dba6d2e562b89cf8337",
".git/objects/68/c3e80735030d978a62bf31c5a05df72a28dabf": "f6f523d82ea691b4d76470df49e47e0b",
".git/objects/69/8c430f6539a48c64be2d71264e7f23b98f3dda": "3d8193a4e00ee35a69a0b3b2f637a418",
".git/objects/6c/17df6cee5df1b9eee3101d464f54cd1ba51e3f": "65775c62feaef5fe299804d8d8a8ee1a",
".git/objects/6c/4c39cad11c20bbb6f1cd5393ccf238127270ef": "935a37ec9f3373ce686862eef0c17d52",
".git/objects/6d/472893501ab8f252bc01610a53c05dd710e4b9": "9e3eb599b83979840b33d27eab3123ec",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/ca39419f4e434f5574deb44de9108e4e7cdc73": "d501af86bea5d22596e12cae01a5c8de",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/154b3db017fd5c53632ff94ab34b458a6367bd": "4425e987d2a0c71f7b0f2d09d3f8dacc",
".git/objects/73/5d50b6b872c818c4b38b5214626ff26ee7f9c8": "ab78ca738cd0323ca66247f19f62aaaf",
".git/objects/73/657074dcc733169d36960a3ee3e7fb9499f482": "5b0f66798bd9e3c649e708c2dd2c29e6",
".git/objects/78/4f68633f94222271bb00aa95e2dd041d6d50d6": "9837eed674a833be7a05dd864e7e6f0c",
".git/objects/78/6a9ddb8c85c343777d8179b9cd0d4006aafa88": "41d3523c15b0ad7166a8451ab642e52a",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/e2667c989e92dc4ddbaca6eab231d41cf0aa5f": "eb1ec01a6082d178e0143a7e8175d7ae",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/7b/b3bd8afa8efd8474421dc8ee5d1b2d61be7c8a": "6def4c84cbe7a890fce364e23a60ff94",
".git/objects/7e/637c7ccb3824a26bb223bdc4364e4632cee34d": "63014f0209caced3af37a2012a1fcffd",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/82/dc98316c02b9375176db1adfc73db295b5e88b": "f60b60c5e9890113f497816ad24f57fb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/f55efebc47229c333540c54c540b19c508c3a9": "af91fc39a40eb7b224ce65e24ccfee5c",
".git/objects/86/9703c8007fb1d5489daa5725f7f9b0bf61d6f8": "6d124170806a87e5cc43db78811ad15a",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/d2e7757b701192f56be5b603e3a7c22db9e1f8": "21e5e4755f7775c55d33006e15ae8ed6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/399eda7dc599e5e9eabde417dfd75bfed1cb39": "a7bf925018ddebe662f99bfb1a5bdf88",
".git/objects/8e/9a48f5e5586cbea0746a691487c9b1cd4efe37": "92b0910fe3a3145394f946379be574d0",
".git/objects/90/c84b70dc2d5b5febc19b7866dbd99605b0c1d0": "c3bfa2f5bec7c8d0d71b00c738404769",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/93/229270d98c33464a5a10311a1c6de24fb4203f": "68e6cae739cf36fb5bef3e42e6516734",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/702a8123bf6e79e617894d2c1e2661087b8d19": "2c278c34254b53d67d68b4b9b1135380",
".git/objects/95/bf6a0bff217be4e67026f8c3dacfdbddc086ed": "11dca4a34946cf9fecd1056432b38ecc",
".git/objects/95/e879aae8074a77d370feb8aff2ec029226a217": "afb96764dcfd85391110e4250835432c",
".git/objects/96/3c27f97a7db5910bafe564b9b99184e0e5a990": "18459094c84b452ef35e45a81741c851",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/99/4c1cdf1f6b3a07a34b92e9147200bae9fc44f0": "51eeedc25c33871e52f785e4b8826815",
".git/objects/9a/6549540bebae838a6a69bba9e9634c33ff6975": "de5fdae9c986956f5432e5023ec45a76",
".git/objects/9a/6ca8ad5078a8df2bf8b36af68041797985d8a8": "ba13ac9aad0e10ffe077c8f4492e918a",
".git/objects/9b/9d16b423e8202641976b6f9deb8a8b87aada67": "7b745008b79c629dd7cf0b352eba2c9c",
".git/objects/9c/68172a9b6dc626e1592b5f913f405bb931cfb4": "99efed2ecbb08f5f34be7f36ed6ed338",
".git/objects/9c/99aeddabba2489d85188c9e479f33b3557488f": "8bedd352a0501886dda3842e81e92b86",
".git/objects/a0/0e4ceb4e5acca951a0dd47457a90c6a83531ad": "c1b54d5b20da7f9d02d122636081ea29",
".git/objects/a0/ecea4e57ccc800fa66d7037a3f0b944e222c05": "422ae4bf1aa41531ac477c3b9ebf1234",
".git/objects/a8/7973f089b0156bc59ec202bfbf68d6dbf73a64": "a1a68f1ba2c15710477b6d0f35d670a1",
".git/objects/a9/e40d1b88fb4a90eb20eefe27f74177c993134e": "32170ffb1256653722b71960e256ca7c",
".git/objects/ab/ed57381b6025e374acde7ff8a1433a194004c8": "2220a436c70cf56cce2f834d62ab491a",
".git/objects/ad/57b6420ea3908367d79de63cff81fc75f9640a": "9c3fe4bed7416e90ec5ae2b157040648",
".git/objects/ad/6a8237601c933964069960b801e41fb0f3168b": "a890db318134f60b67cdd009b3ee21ee",
".git/objects/ae/ea8cf3ac01d3988b38a3cc298f27da9600c066": "9d267b868e853309d1f49f31e6a0ee5c",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/e51cb9573420a7bc8ba4e632dba5b8aeacca3f": "1162a81a4621ca1d2585873fd9ca5de0",
".git/objects/b2/0ea8b24317a0e3157377560b7c56f44d385698": "49af5288097c96a1c89157e083e537b2",
".git/objects/b2/b8bd54e1c5d69bf31f62530c7eebba04f97522": "1b418c50f73c9f2ccbf330ba1a9e5a85",
".git/objects/b3/7caf781bc8f8e5f8c1c26a5c4ce3eb1ad8d7cc": "7b277f8e57ee9e5d4f8711d92abd0593",
".git/objects/b4/27bb0b10114c4811e0cae6d182e622a097aac8": "01a576f04dceddebd9dec03c357a47b4",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1e139053c5b9cdf9c1a8dd9555afc551538035": "2486a98277bb68e50b3e238426729cdf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/825e1b2081345b07c18c5a4dfab88c2f35b730": "0a99967ae3230a1fae97f1f6035ce9c2",
".git/objects/ba/43b930660409347ededb4df543f790a9d774f9": "0f13c6ce9015ca65cd6d09209dfd6aa1",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/31801ec940484b6594d8b44ad5282bc47db231": "9c8a9c14fdda888c5da734120f9ed9bb",
".git/objects/be/581056b06da633c6589d40b35e96abd73cce47": "19036a8bc216e600808d443a67ba56d1",
".git/objects/bf/ec27071c235c3890add6a6d0cc9b4d52ccf70e": "066440b8bb418706f41253355d9b2d0d",
".git/objects/c0/bef1f0d45c9396e58a2bd33023f34ea7bf99f1": "6090b91874df4aee0d31b2f8468d058b",
".git/objects/c1/3d0e1aef01107a8d991d2444e097920cb38391": "2c0bc902a7211828a151340cb6a49df1",
".git/objects/c3/97a278afaf6b2a574dd72621c0a41ac2a288ba": "6251225bcd666bba4d598f75b029d399",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/8a9cf526a7951a3c63e8c70735ad1348048b15": "e80c25d8c27c552ff66e1da248a57be4",
".git/objects/cb/78c5c31319f4ae30f707519c6d3a78e7449916": "3eddba91001ef6b550e211290f5442fb",
".git/objects/cc/00f71fab52d0aced33443c3e15ddd8290081fb": "ff60d0b2a3f7240c9ba85c26c63a5f29",
".git/objects/cc/3046fc0185920525f622b92df82521c0f1a5b5": "fb06758799c9a884318dad31ce248a94",
".git/objects/cc/a0b817d7ff181cfacfa6d6b436dee9aa993672": "f024bbdee74f6861bbeb0fdd8c31d507",
".git/objects/cd/fcecbbf8f427196df6f051266d724b3aa7384f": "799911f580b5114ba5a0f441764357f1",
".git/objects/cf/d80fd2e9f2d2993c59b18cb3ea8b152d44a5ae": "b4033a64b041bbab644ed5ee32c2a658",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5a6d857f2b2fe701b5e16ba7f889aa9255377a": "1ab668b62306e8e96426bcfe18c74d88",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/23b0935450b03c30fcfab68e47e0f21cfeb548": "d3075ba085451d246ad3717299ba47d1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/aeb5a96c773cb68845b6f553949000f795c7c9": "ef42c76832738e9e70242e5b0690880e",
".git/objects/da/0bd215ef8f18cd9bb57d4cbd5dbd83b509318b": "c9b9e3c3fda13550cb8f5765ce76f633",
".git/objects/da/d31bee3f1e349d30b83d6c69342ad20eb7d343": "d103175c19e53f5dad4d02ce0c43ed77",
".git/objects/df/7d8f3f30e935427f156345435ad61a33c0ed04": "cbede45794500c4bcb6aaf21ca70b8e6",
".git/objects/df/949aebbedea8b9adeef1ccdd3b0ce579c34c72": "c3b9c2fbb0b6e254bff4cedd163b3d11",
".git/objects/e2/3cf962802dce7ec48c393a4886bfa0dc0d3425": "b00a2bde1840fde29495fea83a181052",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/f6999392998f9eb9048ed7703d65697eb5ebb1": "d1c7c05f63179723689b996e06ec49ea",
".git/objects/e7/a8ebb52cbb762a967cf3dcc46d6490a688bccd": "04345a51f51d0cef237e0d30f373984c",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/9db685087dee18bfc6de885060262b1fecd907": "69598dfd644a0a7d199c2cfec90c7160",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/288b5defd01e4b00d0b96798d36e31fbe17ff6": "415b1adfb9db518a9617e083d7aaae33",
".git/objects/f0/84e7f4fe38648dfca3609551f9028a31e53bc9": "d8a711deb68b34802f094779c6993b8b",
".git/objects/f1/f0f62a3cc8ea30b0ad060a35d20a4670ff15cf": "373a3607aaa66fa9032c925ce667e2d9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3ca11f6509b48a1db2176b838024d3969347d7": "1f5bfec4a7c2867812a60d87373a0073",
".git/objects/f4/57e8c4b9b7d1a11f2693d6a289a683c052ae3a": "37f9ef0d028eba8e1cae3f36bd0a85b3",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/f8/6656f9ed31e7585e6f5594cdb9b28309d8a739": "5f9afdb2a2c82a0b9c70bf962c982cc8",
".git/objects/f8/94ab5d09120200c170b1022fb94ae7654ef623": "d56411c9c5e44918718c0909ff900349",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/21b6b452a71d74ee18bf34b751b6917b66325b": "b2acdde18e36092c7cf5a969b7b68b67",
".git/objects/fc/55a2e9ee4df8f563758f8da42a4ce6a165f7d9": "fd04d63a03a8a59ca05d2f9cf78c7df9",
".git/objects/fc/7b40ffb2657dc893069a691392c129f1bff95b": "1c9fbae98da95ca6f006c1ec7369e662",
".git/objects/fe/7199ebbc4370d064af92629a7c96904020e11c": "aee65309da5ce158ef5588999c3fa3db",
".git/objects/fe/e217275a9b1a439fbfc281af8ea54f0325f54b": "5ffc9116a4df1db07a103d78aaf53b88",
".git/refs/heads/master": "55ff3f9f31b2d171feab718c725a0d0d",
".git/refs/remotes/origin/master": "55ff3f9f31b2d171feab718c725a0d0d",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "0988f3c846a251213d37419b1fc72ee8",
"assets/AssetManifest.bin.json": "d9eccffd5b1c53c1170f31bd4ef1bce6",
"assets/AssetManifest.json": "08acfc0aa8a11b30fe7d72e423403e7f",
"assets/assets/logo.png": "76b217635c4cbc9dc9aeb6e7315fae78",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "665472d12788404b3ba72df8594fde36",
"assets/NOTICES": "2661a7f10c2032311679f0eef24550e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "86515f5e2e4e0b7c4a22ba251142b321",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "c76af7881b6721bb174cb6b54ca5f343",
"favicon.png": "6467e5900eba2573ef5326ae4ad5b800",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "2c09677eaf79addeca205d40a0d97acb",
"icons/Icon-512.png": "73d73fcda8e98342e306d618c1a2fbc9",
"icons/Icon-maskable-192.png": "2c09677eaf79addeca205d40a0d97acb",
"icons/Icon-maskable-512.png": "73d73fcda8e98342e306d618c1a2fbc9",
"index.html": "fcecdd8ff1e9c6051be6feb140ca1847",
"/": "fcecdd8ff1e9c6051be6feb140ca1847",
"main.dart.js": "29b9bba2570860065da4a46d627090a7",
"manifest.json": "a7e648259a0b269f2c0b3385143f4ba7",
"version.json": "e589e0693a058668d741f3ac8ddf6d16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
