# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/ui/Employee/AddEmployee.spec.ts >> Employee Management >> Add a new employee
- Location: tests/ui/Employee/AddEmployee.spec.ts:9:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('a:has-text("Add Employee")')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: abc_edited user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - generic [ref=e138]:
              - text: More
              - generic [ref=e139]: 
          - button "" [ref=e141] [cursor=pointer]:
            - generic [ref=e142]: 
  - generic [ref=e143]:
    - generic [ref=e145]:
      - generic [ref=e146]:
        - generic [ref=e147]:
          - heading "Employee Information" [level=5] [ref=e149]
          - button "" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]: 
        - text:    
      - generic [ref=e154]:
        - button " Add" [ref=e156] [cursor=pointer]:
          - generic [ref=e157]: 
          - text: Add
        - generic [ref=e158]:
          - separator [ref=e159]
          - generic [ref=e161]: (183) Records Found
        - table [ref=e163]:
          - rowgroup [ref=e164]:
            - row "Id dfgsjsjdh   First (& Middle) Name 123445 34Prabhakar Last Name 444444" [ref=e166] [cursor=pointer]:
              - generic [ref=e167]:
                - generic [ref=e168]:
                  - cell "Id dfgsjsjdh" [ref=e170]:
                    - generic [ref=e171]:
                      - generic [ref=e172]: Id
                      - generic [ref=e173]: dfgsjsjdh
                  - cell " " [ref=e175]:
                    - generic [ref=e176]:
                      - button "" [ref=e177]:
                        - generic [ref=e178]: 
                      - button "" [ref=e179]:
                        - generic [ref=e180]: 
                - generic [ref=e181]:
                  - cell "First (& Middle) Name 123445 34Prabhakar" [ref=e182]:
                    - generic [ref=e183]:
                      - generic [ref=e184]: First (& Middle) Name
                      - generic [ref=e185]: 123445 34Prabhakar
                  - cell "Last Name 444444" [ref=e186]:
                    - generic [ref=e187]:
                      - generic [ref=e188]: Last Name
                      - generic [ref=e189]: "444444"
            - row "Id 0295   First (& Middle) Name 99N75 425 Last Name 5TlV" [ref=e191] [cursor=pointer]:
              - generic [ref=e192]:
                - generic [ref=e193]:
                  - cell "Id 0295" [ref=e195]:
                    - generic [ref=e196]:
                      - generic [ref=e197]: Id
                      - generic [ref=e198]: "0295"
                  - cell " " [ref=e200]:
                    - generic [ref=e201]:
                      - button "" [ref=e202]:
                        - generic [ref=e203]: 
                      - button "" [ref=e204]:
                        - generic [ref=e205]: 
                - generic [ref=e206]:
                  - cell "First (& Middle) Name 99N75 425" [ref=e207]:
                    - generic [ref=e208]:
                      - generic [ref=e209]: First (& Middle) Name
                      - generic [ref=e210]: 99N75 425
                  - cell "Last Name 5TlV" [ref=e211]:
                    - generic [ref=e212]:
                      - generic [ref=e213]: Last Name
                      - generic [ref=e214]: 5TlV
            - row "Id 0312   First (& Middle) Name A8DCo 4Ys Last Name 010Z" [ref=e216] [cursor=pointer]:
              - generic [ref=e217]:
                - generic [ref=e218]:
                  - cell "Id 0312" [ref=e220]:
                    - generic [ref=e221]:
                      - generic [ref=e222]: Id
                      - generic [ref=e223]: "0312"
                  - cell " " [ref=e225]:
                    - generic [ref=e226]:
                      - button "" [ref=e227]:
                        - generic [ref=e228]: 
                      - button "" [ref=e229]:
                        - generic [ref=e230]: 
                - generic [ref=e231]:
                  - cell "First (& Middle) Name A8DCo 4Ys" [ref=e232]:
                    - generic [ref=e233]:
                      - generic [ref=e234]: First (& Middle) Name
                      - generic [ref=e235]: A8DCo 4Ys
                  - cell "Last Name 010Z" [ref=e236]:
                    - generic [ref=e237]:
                      - generic [ref=e238]: Last Name
                      - generic [ref=e239]: 010Z
            - row "Id 6199   First (& Middle) Name aaiMc AW Last Name VAMvb" [ref=e241] [cursor=pointer]:
              - generic [ref=e242]:
                - generic [ref=e243]:
                  - cell "Id 6199" [ref=e245]:
                    - generic [ref=e246]:
                      - generic [ref=e247]: Id
                      - generic [ref=e248]: "6199"
                  - cell " " [ref=e250]:
                    - generic [ref=e251]:
                      - button "" [ref=e252]:
                        - generic [ref=e253]: 
                      - button "" [ref=e254]:
                        - generic [ref=e255]: 
                - generic [ref=e256]:
                  - cell "First (& Middle) Name aaiMc AW" [ref=e257]:
                    - generic [ref=e258]:
                      - generic [ref=e259]: First (& Middle) Name
                      - generic [ref=e260]: aaiMc AW
                  - cell "Last Name VAMvb" [ref=e261]:
                    - generic [ref=e262]:
                      - generic [ref=e263]: Last Name
                      - generic [ref=e264]: VAMvb
            - row "Id muser  First (& Middle) Name abc_edited akhil Last Name user Job Title HR Manager Employment Status Full-Time Permanent Sub Unit Human Resources" [ref=e266] [cursor=pointer]:
              - generic [ref=e267]:
                - generic [ref=e268]:
                  - cell "Id muser" [ref=e270]:
                    - generic [ref=e271]:
                      - generic [ref=e272]: Id
                      - generic [ref=e273]: muser
                  - cell "" [ref=e275]:
                    - button "" [ref=e277]:
                      - generic [ref=e278]: 
                - generic [ref=e279]:
                  - cell "First (& Middle) Name abc_edited akhil" [ref=e280]:
                    - generic [ref=e281]:
                      - generic [ref=e282]: First (& Middle) Name
                      - generic [ref=e283]: abc_edited akhil
                  - cell "Last Name user" [ref=e284]:
                    - generic [ref=e285]:
                      - generic [ref=e286]: Last Name
                      - generic [ref=e287]: user
                  - cell "Job Title HR Manager" [ref=e288]:
                    - generic [ref=e289]:
                      - generic [ref=e290]: Job Title
                      - generic [ref=e291]: HR Manager
                  - cell "Employment Status Full-Time Permanent" [ref=e292]:
                    - generic [ref=e293]:
                      - generic [ref=e294]: Employment Status
                      - generic [ref=e295]: Full-Time Permanent
                  - cell "Sub Unit Human Resources" [ref=e296]:
                    - generic [ref=e297]:
                      - generic [ref=e298]: Sub Unit
                      - generic [ref=e299]: Human Resources
            - row "Id 0414   First (& Middle) Name Admin Last Name 2" [ref=e301] [cursor=pointer]:
              - generic [ref=e302]:
                - generic [ref=e303]:
                  - cell "Id 0414" [ref=e305]:
                    - generic [ref=e306]:
                      - generic [ref=e307]: Id
                      - generic [ref=e308]: "0414"
                  - cell " " [ref=e310]:
                    - generic [ref=e311]:
                      - button "" [ref=e312]:
                        - generic [ref=e313]: 
                      - button "" [ref=e314]:
                        - generic [ref=e315]: 
                - generic [ref=e316]:
                  - cell "First (& Middle) Name Admin" [ref=e317]:
                    - generic [ref=e318]:
                      - generic [ref=e319]: First (& Middle) Name
                      - generic [ref=e320]: Admin
                  - cell "Last Name 2" [ref=e321]:
                    - generic [ref=e322]:
                      - generic [ref=e323]: Last Name
                      - generic [ref=e324]: "2"
            - row "Id 0413   First (& Middle) Name Admin Last Name 1" [ref=e326] [cursor=pointer]:
              - generic [ref=e327]:
                - generic [ref=e328]:
                  - cell "Id 0413" [ref=e330]:
                    - generic [ref=e331]:
                      - generic [ref=e332]: Id
                      - generic [ref=e333]: "0413"
                  - cell " " [ref=e335]:
                    - generic [ref=e336]:
                      - button "" [ref=e337]:
                        - generic [ref=e338]: 
                      - button "" [ref=e339]:
                        - generic [ref=e340]: 
                - generic [ref=e341]:
                  - cell "First (& Middle) Name Admin" [ref=e342]:
                    - generic [ref=e343]:
                      - generic [ref=e344]: First (& Middle) Name
                      - generic [ref=e345]: Admin
                  - cell "Last Name 1" [ref=e346]:
                    - generic [ref=e347]:
                      - generic [ref=e348]: Last Name
                      - generic [ref=e349]: "1"
            - row "Id 01715   First (& Middle) Name Amelia Last Name Brown" [ref=e351] [cursor=pointer]:
              - generic [ref=e352]:
                - generic [ref=e353]:
                  - cell "Id 01715" [ref=e355]:
                    - generic [ref=e356]:
                      - generic [ref=e357]: Id
                      - generic [ref=e358]: "01715"
                  - cell " " [ref=e360]:
                    - generic [ref=e361]:
                      - button "" [ref=e362]:
                        - generic [ref=e363]: 
                      - button "" [ref=e364]:
                        - generic [ref=e365]: 
                - generic [ref=e366]:
                  - cell "First (& Middle) Name Amelia" [ref=e367]:
                    - generic [ref=e368]:
                      - generic [ref=e369]: First (& Middle) Name
                      - generic [ref=e370]: Amelia
                  - cell "Last Name Brown" [ref=e371]:
                    - generic [ref=e372]:
                      - generic [ref=e373]: Last Name
                      - generic [ref=e374]: Brown
            - row "Id 0367   First (& Middle) Name Ash J Last Name Tyson" [ref=e376] [cursor=pointer]:
              - generic [ref=e377]:
                - generic [ref=e378]:
                  - cell "Id 0367" [ref=e380]:
                    - generic [ref=e381]:
                      - generic [ref=e382]: Id
                      - generic [ref=e383]: "0367"
                  - cell " " [ref=e385]:
                    - generic [ref=e386]:
                      - button "" [ref=e387]:
                        - generic [ref=e388]: 
                      - button "" [ref=e389]:
                        - generic [ref=e390]: 
                - generic [ref=e391]:
                  - cell "First (& Middle) Name Ash J" [ref=e392]:
                    - generic [ref=e393]:
                      - generic [ref=e394]: First (& Middle) Name
                      - generic [ref=e395]: Ash J
                  - cell "Last Name Tyson" [ref=e396]:
                    - generic [ref=e397]:
                      - generic [ref=e398]: Last Name
                      - generic [ref=e399]: Tyson
            - row "Id EMP007752   First (& Middle) Name Ava Last Name Mehta" [ref=e401] [cursor=pointer]:
              - generic [ref=e402]:
                - generic [ref=e403]:
                  - cell "Id EMP007752" [ref=e405]:
                    - generic [ref=e406]:
                      - generic [ref=e407]: Id
                      - generic [ref=e408]: EMP007752
                  - cell " " [ref=e410]:
                    - generic [ref=e411]:
                      - button "" [ref=e412]:
                        - generic [ref=e413]: 
                      - button "" [ref=e414]:
                        - generic [ref=e415]: 
                - generic [ref=e416]:
                  - cell "First (& Middle) Name Ava" [ref=e417]:
                    - generic [ref=e418]:
                      - generic [ref=e419]: First (& Middle) Name
                      - generic [ref=e420]: Ava
                  - cell "Last Name Mehta" [ref=e421]:
                    - generic [ref=e422]:
                      - generic [ref=e423]: Last Name
                      - generic [ref=e424]: Mehta
            - row "Id EMP971662   First (& Middle) Name Ava Last Name Mehta" [ref=e426] [cursor=pointer]:
              - generic [ref=e427]:
                - generic [ref=e428]:
                  - cell "Id EMP971662" [ref=e430]:
                    - generic [ref=e431]:
                      - generic [ref=e432]: Id
                      - generic [ref=e433]: EMP971662
                  - cell " " [ref=e435]:
                    - generic [ref=e436]:
                      - button "" [ref=e437]:
                        - generic [ref=e438]: 
                      - button "" [ref=e439]:
                        - generic [ref=e440]: 
                - generic [ref=e441]:
                  - cell "First (& Middle) Name Ava" [ref=e442]:
                    - generic [ref=e443]:
                      - generic [ref=e444]: First (& Middle) Name
                      - generic [ref=e445]: Ava
                  - cell "Last Name Mehta" [ref=e446]:
                    - generic [ref=e447]:
                      - generic [ref=e448]: Last Name
                      - generic [ref=e449]: Mehta
            - row "Id EMP948173   First (& Middle) Name Ava Last Name Mehta" [ref=e451] [cursor=pointer]:
              - generic [ref=e452]:
                - generic [ref=e453]:
                  - cell "Id EMP948173" [ref=e455]:
                    - generic [ref=e456]:
                      - generic [ref=e457]: Id
                      - generic [ref=e458]: EMP948173
                  - cell " " [ref=e460]:
                    - generic [ref=e461]:
                      - button "" [ref=e462]:
                        - generic [ref=e463]: 
                      - button "" [ref=e464]:
                        - generic [ref=e465]: 
                - generic [ref=e466]:
                  - cell "First (& Middle) Name Ava" [ref=e467]:
                    - generic [ref=e468]:
                      - generic [ref=e469]: First (& Middle) Name
                      - generic [ref=e470]: Ava
                  - cell "Last Name Mehta" [ref=e471]:
                    - generic [ref=e472]:
                      - generic [ref=e473]: Last Name
                      - generic [ref=e474]: Mehta
            - row "Id 0303   First (& Middle) Name bala kumar Last Name ravi" [ref=e476] [cursor=pointer]:
              - generic [ref=e477]:
                - generic [ref=e478]:
                  - cell "Id 0303" [ref=e480]:
                    - generic [ref=e481]:
                      - generic [ref=e482]: Id
                      - generic [ref=e483]: "0303"
                  - cell " " [ref=e485]:
                    - generic [ref=e486]:
                      - button "" [ref=e487]:
                        - generic [ref=e488]: 
                      - button "" [ref=e489]:
                        - generic [ref=e490]: 
                - generic [ref=e491]:
                  - cell "First (& Middle) Name bala kumar" [ref=e492]:
                    - generic [ref=e493]:
                      - generic [ref=e494]: First (& Middle) Name
                      - generic [ref=e495]: bala kumar
                  - cell "Last Name ravi" [ref=e496]:
                    - generic [ref=e497]:
                      - generic [ref=e498]: Last Name
                      - generic [ref=e499]: ravi
            - row "Id 0292   First (& Middle) Name bmrtahvwhibmrtahvwhi Last Name hbfqkhjfqbhbfqkhjfqb" [ref=e501] [cursor=pointer]:
              - generic [ref=e502]:
                - generic [ref=e503]:
                  - cell "Id 0292" [ref=e505]:
                    - generic [ref=e506]:
                      - generic [ref=e507]: Id
                      - generic [ref=e508]: "0292"
                  - cell " " [ref=e510]:
                    - generic [ref=e511]:
                      - button "" [ref=e512]:
                        - generic [ref=e513]: 
                      - button "" [ref=e514]:
                        - generic [ref=e515]: 
                - generic [ref=e516]:
                  - cell "First (& Middle) Name bmrtahvwhibmrtahvwhi" [ref=e517]:
                    - generic [ref=e518]:
                      - generic [ref=e519]: First (& Middle) Name
                      - generic [ref=e520]: bmrtahvwhibmrtahvwhi
                  - cell "Last Name hbfqkhjfqbhbfqkhjfqb" [ref=e521]:
                    - generic [ref=e522]:
                      - generic [ref=e523]: Last Name
                      - generic [ref=e524]: hbfqkhjfqbhbfqkhjfqb
            - row "Id 0320   First (& Middle) Name Charles Last Name Carter" [ref=e526] [cursor=pointer]:
              - generic [ref=e527]:
                - generic [ref=e528]:
                  - cell "Id 0320" [ref=e530]:
                    - generic [ref=e531]:
                      - generic [ref=e532]: Id
                      - generic [ref=e533]: "0320"
                  - cell " " [ref=e535]:
                    - generic [ref=e536]:
                      - button "" [ref=e537]:
                        - generic [ref=e538]: 
                      - button "" [ref=e539]:
                        - generic [ref=e540]: 
                - generic [ref=e541]:
                  - cell "First (& Middle) Name Charles" [ref=e542]:
                    - generic [ref=e543]:
                      - generic [ref=e544]: First (& Middle) Name
                      - generic [ref=e545]: Charles
                  - cell "Last Name Carter" [ref=e546]:
                    - generic [ref=e547]:
                      - generic [ref=e548]: Last Name
                      - generic [ref=e549]: Carter
            - row "Id 00392   First (& Middle) Name Charlotte Last Name Smith" [ref=e551] [cursor=pointer]:
              - generic [ref=e552]:
                - generic [ref=e553]:
                  - cell "Id 00392" [ref=e555]:
                    - generic [ref=e556]:
                      - generic [ref=e557]: Id
                      - generic [ref=e558]: "00392"
                  - cell " " [ref=e560]:
                    - generic [ref=e561]:
                      - button "" [ref=e562]:
                        - generic [ref=e563]: 
                      - button "" [ref=e564]:
                        - generic [ref=e565]: 
                - generic [ref=e566]:
                  - cell "First (& Middle) Name Charlotte" [ref=e567]:
                    - generic [ref=e568]:
                      - generic [ref=e569]: First (& Middle) Name
                      - generic [ref=e570]: Charlotte
                  - cell "Last Name Smith" [ref=e571]:
                    - generic [ref=e572]:
                      - generic [ref=e573]: Last Name
                      - generic [ref=e574]: Smith
            - row "Id 0363   First (& Middle) Name Christopher Last Name Mcmillan" [ref=e576] [cursor=pointer]:
              - generic [ref=e577]:
                - generic [ref=e578]:
                  - cell "Id 0363" [ref=e580]:
                    - generic [ref=e581]:
                      - generic [ref=e582]: Id
                      - generic [ref=e583]: "0363"
                  - cell " " [ref=e585]:
                    - generic [ref=e586]:
                      - button "" [ref=e587]:
                        - generic [ref=e588]: 
                      - button "" [ref=e589]:
                        - generic [ref=e590]: 
                - generic [ref=e591]:
                  - cell "First (& Middle) Name Christopher" [ref=e592]:
                    - generic [ref=e593]:
                      - generic [ref=e594]: First (& Middle) Name
                      - generic [ref=e595]: Christopher
                  - cell "Last Name Mcmillan" [ref=e596]:
                    - generic [ref=e597]:
                      - generic [ref=e598]: Last Name
                      - generic [ref=e599]: Mcmillan
            - row "  First (& Middle) Name Claim Last Name Tester53664" [ref=e601] [cursor=pointer]:
              - generic [ref=e602]:
                - cell " " [ref=e606]:
                  - generic [ref=e607]:
                    - button "" [ref=e608]:
                      - generic [ref=e609]: 
                    - button "" [ref=e610]:
                      - generic [ref=e611]: 
                - generic [ref=e612]:
                  - cell "First (& Middle) Name Claim" [ref=e613]:
                    - generic [ref=e614]:
                      - generic [ref=e615]: First (& Middle) Name
                      - generic [ref=e616]: Claim
                  - cell "Last Name Tester53664" [ref=e617]:
                    - generic [ref=e618]:
                      - generic [ref=e619]: Last Name
                      - generic [ref=e620]: Tester53664
            - row "  First (& Middle) Name Claim Last Name Tester43071" [ref=e622] [cursor=pointer]:
              - generic [ref=e623]:
                - cell " " [ref=e627]:
                  - generic [ref=e628]:
                    - button "" [ref=e629]:
                      - generic [ref=e630]: 
                    - button "" [ref=e631]:
                      - generic [ref=e632]: 
                - generic [ref=e633]:
                  - cell "First (& Middle) Name Claim" [ref=e634]:
                    - generic [ref=e635]:
                      - generic [ref=e636]: First (& Middle) Name
                      - generic [ref=e637]: Claim
                  - cell "Last Name Tester43071" [ref=e638]:
                    - generic [ref=e639]:
                      - generic [ref=e640]: Last Name
                      - generic [ref=e641]: Tester43071
            - row "Id E8721805   First (& Middle) Name Claim Last Name Tester21805" [ref=e643] [cursor=pointer]:
              - generic [ref=e644]:
                - generic [ref=e645]:
                  - cell "Id E8721805" [ref=e647]:
                    - generic [ref=e648]:
                      - generic [ref=e649]: Id
                      - generic [ref=e650]: E8721805
                  - cell " " [ref=e652]:
                    - generic [ref=e653]:
                      - button "" [ref=e654]:
                        - generic [ref=e655]: 
                      - button "" [ref=e656]:
                        - generic [ref=e657]: 
                - generic [ref=e658]:
                  - cell "First (& Middle) Name Claim" [ref=e659]:
                    - generic [ref=e660]:
                      - generic [ref=e661]: First (& Middle) Name
                      - generic [ref=e662]: Claim
                  - cell "Last Name Tester21805" [ref=e663]:
                    - generic [ref=e664]:
                      - generic [ref=e665]: Last Name
                      - generic [ref=e666]: Tester21805
            - row "  First (& Middle) Name Claim Last Name Tester95816" [ref=e668] [cursor=pointer]:
              - generic [ref=e669]:
                - cell " " [ref=e673]:
                  - generic [ref=e674]:
                    - button "" [ref=e675]:
                      - generic [ref=e676]: 
                    - button "" [ref=e677]:
                      - generic [ref=e678]: 
                - generic [ref=e679]:
                  - cell "First (& Middle) Name Claim" [ref=e680]:
                    - generic [ref=e681]:
                      - generic [ref=e682]: First (& Middle) Name
                      - generic [ref=e683]: Claim
                  - cell "Last Name Tester95816" [ref=e684]:
                    - generic [ref=e685]:
                      - generic [ref=e686]: Last Name
                      - generic [ref=e687]: Tester95816
            - row "  First (& Middle) Name Claim Last Name Tester31419" [ref=e689] [cursor=pointer]:
              - generic [ref=e690]:
                - cell " " [ref=e694]:
                  - generic [ref=e695]:
                    - button "" [ref=e696]:
                      - generic [ref=e697]: 
                    - button "" [ref=e698]:
                      - generic [ref=e699]: 
                - generic [ref=e700]:
                  - cell "First (& Middle) Name Claim" [ref=e701]:
                    - generic [ref=e702]:
                      - generic [ref=e703]: First (& Middle) Name
                      - generic [ref=e704]: Claim
                  - cell "Last Name Tester31419" [ref=e705]:
                    - generic [ref=e706]:
                      - generic [ref=e707]: Last Name
                      - generic [ref=e708]: Tester31419
            - row "Id E8709424   First (& Middle) Name Claim Last Name Tester09424" [ref=e710] [cursor=pointer]:
              - generic [ref=e711]:
                - generic [ref=e712]:
                  - cell "Id E8709424" [ref=e714]:
                    - generic [ref=e715]:
                      - generic [ref=e716]: Id
                      - generic [ref=e717]: E8709424
                  - cell " " [ref=e719]:
                    - generic [ref=e720]:
                      - button "" [ref=e721]:
                        - generic [ref=e722]: 
                      - button "" [ref=e723]:
                        - generic [ref=e724]: 
                - generic [ref=e725]:
                  - cell "First (& Middle) Name Claim" [ref=e726]:
                    - generic [ref=e727]:
                      - generic [ref=e728]: First (& Middle) Name
                      - generic [ref=e729]: Claim
                  - cell "Last Name Tester09424" [ref=e730]:
                    - generic [ref=e731]:
                      - generic [ref=e732]: Last Name
                      - generic [ref=e733]: Tester09424
            - row "  First (& Middle) Name Claim Last Name Tester77613" [ref=e735] [cursor=pointer]:
              - generic [ref=e736]:
                - cell " " [ref=e740]:
                  - generic [ref=e741]:
                    - button "" [ref=e742]:
                      - generic [ref=e743]: 
                    - button "" [ref=e744]:
                      - generic [ref=e745]: 
                - generic [ref=e746]:
                  - cell "First (& Middle) Name Claim" [ref=e747]:
                    - generic [ref=e748]:
                      - generic [ref=e749]: First (& Middle) Name
                      - generic [ref=e750]: Claim
                  - cell "Last Name Tester77613" [ref=e751]:
                    - generic [ref=e752]:
                      - generic [ref=e753]: Last Name
                      - generic [ref=e754]: Tester77613
            - row "  First (& Middle) Name Claim Last Name Tester22215" [ref=e756] [cursor=pointer]:
              - generic [ref=e757]:
                - cell " " [ref=e761]:
                  - generic [ref=e762]:
                    - button "" [ref=e763]:
                      - generic [ref=e764]: 
                    - button "" [ref=e765]:
                      - generic [ref=e766]: 
                - generic [ref=e767]:
                  - cell "First (& Middle) Name Claim" [ref=e768]:
                    - generic [ref=e769]:
                      - generic [ref=e770]: First (& Middle) Name
                      - generic [ref=e771]: Claim
                  - cell "Last Name Tester22215" [ref=e772]:
                    - generic [ref=e773]:
                      - generic [ref=e774]: Last Name
                      - generic [ref=e775]: Tester22215
            - row "Id E8709091   First (& Middle) Name Claim Last Name Tester09091" [ref=e777] [cursor=pointer]:
              - generic [ref=e778]:
                - generic [ref=e779]:
                  - cell "Id E8709091" [ref=e781]:
                    - generic [ref=e782]:
                      - generic [ref=e783]: Id
                      - generic [ref=e784]: E8709091
                  - cell " " [ref=e786]:
                    - generic [ref=e787]:
                      - button "" [ref=e788]:
                        - generic [ref=e789]: 
                      - button "" [ref=e790]:
                        - generic [ref=e791]: 
                - generic [ref=e792]:
                  - cell "First (& Middle) Name Claim" [ref=e793]:
                    - generic [ref=e794]:
                      - generic [ref=e795]: First (& Middle) Name
                      - generic [ref=e796]: Claim
                  - cell "Last Name Tester09091" [ref=e797]:
                    - generic [ref=e798]:
                      - generic [ref=e799]: Last Name
                      - generic [ref=e800]: Tester09091
            - row "  First (& Middle) Name Claim Last Name Tester85058" [ref=e802] [cursor=pointer]:
              - generic [ref=e803]:
                - cell " " [ref=e807]:
                  - generic [ref=e808]:
                    - button "" [ref=e809]:
                      - generic [ref=e810]: 
                    - button "" [ref=e811]:
                      - generic [ref=e812]: 
                - generic [ref=e813]:
                  - cell "First (& Middle) Name Claim" [ref=e814]:
                    - generic [ref=e815]:
                      - generic [ref=e816]: First (& Middle) Name
                      - generic [ref=e817]: Claim
                  - cell "Last Name Tester85058" [ref=e818]:
                    - generic [ref=e819]:
                      - generic [ref=e820]: Last Name
                      - generic [ref=e821]: Tester85058
            - row "  First (& Middle) Name Claim Last Name Tester74802" [ref=e823] [cursor=pointer]:
              - generic [ref=e824]:
                - cell " " [ref=e828]:
                  - generic [ref=e829]:
                    - button "" [ref=e830]:
                      - generic [ref=e831]: 
                    - button "" [ref=e832]:
                      - generic [ref=e833]: 
                - generic [ref=e834]:
                  - cell "First (& Middle) Name Claim" [ref=e835]:
                    - generic [ref=e836]:
                      - generic [ref=e837]: First (& Middle) Name
                      - generic [ref=e838]: Claim
                  - cell "Last Name Tester74802" [ref=e839]:
                    - generic [ref=e840]:
                      - generic [ref=e841]: Last Name
                      - generic [ref=e842]: Tester74802
            - row "  First (& Middle) Name Claim Last Name Tester77102" [ref=e844] [cursor=pointer]:
              - generic [ref=e845]:
                - cell " " [ref=e849]:
                  - generic [ref=e850]:
                    - button "" [ref=e851]:
                      - generic [ref=e852]: 
                    - button "" [ref=e853]:
                      - generic [ref=e854]: 
                - generic [ref=e855]:
                  - cell "First (& Middle) Name Claim" [ref=e856]:
                    - generic [ref=e857]:
                      - generic [ref=e858]: First (& Middle) Name
                      - generic [ref=e859]: Claim
                  - cell "Last Name Tester77102" [ref=e860]:
                    - generic [ref=e861]:
                      - generic [ref=e862]: Last Name
                      - generic [ref=e863]: Tester77102
            - row "  First (& Middle) Name Claim Last Name Tester06337" [ref=e865] [cursor=pointer]:
              - generic [ref=e866]:
                - cell " " [ref=e870]:
                  - generic [ref=e871]:
                    - button "" [ref=e872]:
                      - generic [ref=e873]: 
                    - button "" [ref=e874]:
                      - generic [ref=e875]: 
                - generic [ref=e876]:
                  - cell "First (& Middle) Name Claim" [ref=e877]:
                    - generic [ref=e878]:
                      - generic [ref=e879]: First (& Middle) Name
                      - generic [ref=e880]: Claim
                  - cell "Last Name Tester06337" [ref=e881]:
                    - generic [ref=e882]:
                      - generic [ref=e883]: Last Name
                      - generic [ref=e884]: Tester06337
            - row "  First (& Middle) Name Claim Last Name Tester28925" [ref=e886] [cursor=pointer]:
              - generic [ref=e887]:
                - cell " " [ref=e891]:
                  - generic [ref=e892]:
                    - button "" [ref=e893]:
                      - generic [ref=e894]: 
                    - button "" [ref=e895]:
                      - generic [ref=e896]: 
                - generic [ref=e897]:
                  - cell "First (& Middle) Name Claim" [ref=e898]:
                    - generic [ref=e899]:
                      - generic [ref=e900]: First (& Middle) Name
                      - generic [ref=e901]: Claim
                  - cell "Last Name Tester28925" [ref=e902]:
                    - generic [ref=e903]:
                      - generic [ref=e904]: Last Name
                      - generic [ref=e905]: Tester28925
            - row "  First (& Middle) Name Claim Last Name Tester51122" [ref=e907] [cursor=pointer]:
              - generic [ref=e908]:
                - cell " " [ref=e912]:
                  - generic [ref=e913]:
                    - button "" [ref=e914]:
                      - generic [ref=e915]: 
                    - button "" [ref=e916]:
                      - generic [ref=e917]: 
                - generic [ref=e918]:
                  - cell "First (& Middle) Name Claim" [ref=e919]:
                    - generic [ref=e920]:
                      - generic [ref=e921]: First (& Middle) Name
                      - generic [ref=e922]: Claim
                  - cell "Last Name Tester51122" [ref=e923]:
                    - generic [ref=e924]:
                      - generic [ref=e925]: Last Name
                      - generic [ref=e926]: Tester51122
            - row "  First (& Middle) Name Claim Last Name Tester64087" [ref=e928] [cursor=pointer]:
              - generic [ref=e929]:
                - cell " " [ref=e933]:
                  - generic [ref=e934]:
                    - button "" [ref=e935]:
                      - generic [ref=e936]: 
                    - button "" [ref=e937]:
                      - generic [ref=e938]: 
                - generic [ref=e939]:
                  - cell "First (& Middle) Name Claim" [ref=e940]:
                    - generic [ref=e941]:
                      - generic [ref=e942]: First (& Middle) Name
                      - generic [ref=e943]: Claim
                  - cell "Last Name Tester64087" [ref=e944]:
                    - generic [ref=e945]:
                      - generic [ref=e946]: Last Name
                      - generic [ref=e947]: Tester64087
            - row "  First (& Middle) Name Claim Last Name Tester66629" [ref=e949] [cursor=pointer]:
              - generic [ref=e950]:
                - cell " " [ref=e954]:
                  - generic [ref=e955]:
                    - button "" [ref=e956]:
                      - generic [ref=e957]: 
                    - button "" [ref=e958]:
                      - generic [ref=e959]: 
                - generic [ref=e960]:
                  - cell "First (& Middle) Name Claim" [ref=e961]:
                    - generic [ref=e962]:
                      - generic [ref=e963]: First (& Middle) Name
                      - generic [ref=e964]: Claim
                  - cell "Last Name Tester66629" [ref=e965]:
                    - generic [ref=e966]:
                      - generic [ref=e967]: Last Name
                      - generic [ref=e968]: Tester66629
            - row "  First (& Middle) Name Claim Last Name Tester96957" [ref=e970] [cursor=pointer]:
              - generic [ref=e971]:
                - cell " " [ref=e975]:
                  - generic [ref=e976]:
                    - button "" [ref=e977]:
                      - generic [ref=e978]: 
                    - button "" [ref=e979]:
                      - generic [ref=e980]: 
                - generic [ref=e981]:
                  - cell "First (& Middle) Name Claim" [ref=e982]:
                    - generic [ref=e983]:
                      - generic [ref=e984]: First (& Middle) Name
                      - generic [ref=e985]: Claim
                  - cell "Last Name Tester96957" [ref=e986]:
                    - generic [ref=e987]:
                      - generic [ref=e988]: Last Name
                      - generic [ref=e989]: Tester96957
            - row "  First (& Middle) Name Claim Last Name Tester19083" [ref=e991] [cursor=pointer]:
              - generic [ref=e992]:
                - cell " " [ref=e996]:
                  - generic [ref=e997]:
                    - button "" [ref=e998]:
                      - generic [ref=e999]: 
                    - button "" [ref=e1000]:
                      - generic [ref=e1001]: 
                - generic [ref=e1002]:
                  - cell "First (& Middle) Name Claim" [ref=e1003]:
                    - generic [ref=e1004]:
                      - generic [ref=e1005]: First (& Middle) Name
                      - generic [ref=e1006]: Claim
                  - cell "Last Name Tester19083" [ref=e1007]:
                    - generic [ref=e1008]:
                      - generic [ref=e1009]: Last Name
                      - generic [ref=e1010]: Tester19083
            - row "Id E8598974   First (& Middle) Name Claim Last Name Tester98974" [ref=e1012] [cursor=pointer]:
              - generic [ref=e1013]:
                - generic [ref=e1014]:
                  - cell "Id E8598974" [ref=e1016]:
                    - generic [ref=e1017]:
                      - generic [ref=e1018]: Id
                      - generic [ref=e1019]: E8598974
                  - cell " " [ref=e1021]:
                    - generic [ref=e1022]:
                      - button "" [ref=e1023]:
                        - generic [ref=e1024]: 
                      - button "" [ref=e1025]:
                        - generic [ref=e1026]: 
                - generic [ref=e1027]:
                  - cell "First (& Middle) Name Claim" [ref=e1028]:
                    - generic [ref=e1029]:
                      - generic [ref=e1030]: First (& Middle) Name
                      - generic [ref=e1031]: Claim
                  - cell "Last Name Tester98974" [ref=e1032]:
                    - generic [ref=e1033]:
                      - generic [ref=e1034]: Last Name
                      - generic [ref=e1035]: Tester98974
            - row "  First (& Middle) Name Claim Last Name Tester53693" [ref=e1037] [cursor=pointer]:
              - generic [ref=e1038]:
                - cell " " [ref=e1042]:
                  - generic [ref=e1043]:
                    - button "" [ref=e1044]:
                      - generic [ref=e1045]: 
                    - button "" [ref=e1046]:
                      - generic [ref=e1047]: 
                - generic [ref=e1048]:
                  - cell "First (& Middle) Name Claim" [ref=e1049]:
                    - generic [ref=e1050]:
                      - generic [ref=e1051]: First (& Middle) Name
                      - generic [ref=e1052]: Claim
                  - cell "Last Name Tester53693" [ref=e1053]:
                    - generic [ref=e1054]:
                      - generic [ref=e1055]: Last Name
                      - generic [ref=e1056]: Tester53693
            - row "Id E8721927   First (& Middle) Name Claim Last Name Tester21927" [ref=e1058] [cursor=pointer]:
              - generic [ref=e1059]:
                - generic [ref=e1060]:
                  - cell "Id E8721927" [ref=e1062]:
                    - generic [ref=e1063]:
                      - generic [ref=e1064]: Id
                      - generic [ref=e1065]: E8721927
                  - cell " " [ref=e1067]:
                    - generic [ref=e1068]:
                      - button "" [ref=e1069]:
                        - generic [ref=e1070]: 
                      - button "" [ref=e1071]:
                        - generic [ref=e1072]: 
                - generic [ref=e1073]:
                  - cell "First (& Middle) Name Claim" [ref=e1074]:
                    - generic [ref=e1075]:
                      - generic [ref=e1076]: First (& Middle) Name
                      - generic [ref=e1077]: Claim
                  - cell "Last Name Tester21927" [ref=e1078]:
                    - generic [ref=e1079]:
                      - generic [ref=e1080]: Last Name
                      - generic [ref=e1081]: Tester21927
            - row "  First (& Middle) Name Claim Last Name Tester87016" [ref=e1083] [cursor=pointer]:
              - generic [ref=e1084]:
                - cell " " [ref=e1088]:
                  - generic [ref=e1089]:
                    - button "" [ref=e1090]:
                      - generic [ref=e1091]: 
                    - button "" [ref=e1092]:
                      - generic [ref=e1093]: 
                - generic [ref=e1094]:
                  - cell "First (& Middle) Name Claim" [ref=e1095]:
                    - generic [ref=e1096]:
                      - generic [ref=e1097]: First (& Middle) Name
                      - generic [ref=e1098]: Claim
                  - cell "Last Name Tester87016" [ref=e1099]:
                    - generic [ref=e1100]:
                      - generic [ref=e1101]: Last Name
                      - generic [ref=e1102]: Tester87016
            - row "  First (& Middle) Name Claim Last Name Tester07465" [ref=e1104] [cursor=pointer]:
              - generic [ref=e1105]:
                - cell " " [ref=e1109]:
                  - generic [ref=e1110]:
                    - button "" [ref=e1111]:
                      - generic [ref=e1112]: 
                    - button "" [ref=e1113]:
                      - generic [ref=e1114]: 
                - generic [ref=e1115]:
                  - cell "First (& Middle) Name Claim" [ref=e1116]:
                    - generic [ref=e1117]:
                      - generic [ref=e1118]: First (& Middle) Name
                      - generic [ref=e1119]: Claim
                  - cell "Last Name Tester07465" [ref=e1120]:
                    - generic [ref=e1121]:
                      - generic [ref=e1122]: Last Name
                      - generic [ref=e1123]: Tester07465
            - row "  First (& Middle) Name Claim Last Name Tester40992" [ref=e1125] [cursor=pointer]:
              - generic [ref=e1126]:
                - cell " " [ref=e1130]:
                  - generic [ref=e1131]:
                    - button "" [ref=e1132]:
                      - generic [ref=e1133]: 
                    - button "" [ref=e1134]:
                      - generic [ref=e1135]: 
                - generic [ref=e1136]:
                  - cell "First (& Middle) Name Claim" [ref=e1137]:
                    - generic [ref=e1138]:
                      - generic [ref=e1139]: First (& Middle) Name
                      - generic [ref=e1140]: Claim
                  - cell "Last Name Tester40992" [ref=e1141]:
                    - generic [ref=e1142]:
                      - generic [ref=e1143]: Last Name
                      - generic [ref=e1144]: Tester40992
            - row "Id 4807   First (& Middle) Name cMRwN gT Last Name RvYpe" [ref=e1146] [cursor=pointer]:
              - generic [ref=e1147]:
                - generic [ref=e1148]:
                  - cell "Id 4807" [ref=e1150]:
                    - generic [ref=e1151]:
                      - generic [ref=e1152]: Id
                      - generic [ref=e1153]: "4807"
                  - cell " " [ref=e1155]:
                    - generic [ref=e1156]:
                      - button "" [ref=e1157]:
                        - generic [ref=e1158]: 
                      - button "" [ref=e1159]:
                        - generic [ref=e1160]: 
                - generic [ref=e1161]:
                  - cell "First (& Middle) Name cMRwN gT" [ref=e1162]:
                    - generic [ref=e1163]:
                      - generic [ref=e1164]: First (& Middle) Name
                      - generic [ref=e1165]: cMRwN gT
                  - cell "Last Name RvYpe" [ref=e1166]:
                    - generic [ref=e1167]:
                      - generic [ref=e1168]: Last Name
                      - generic [ref=e1169]: RvYpe
            - row "Id 8458   First (& Middle) Name CXQSa pK Last Name LNigz" [ref=e1171] [cursor=pointer]:
              - generic [ref=e1172]:
                - generic [ref=e1173]:
                  - cell "Id 8458" [ref=e1175]:
                    - generic [ref=e1176]:
                      - generic [ref=e1177]: Id
                      - generic [ref=e1178]: "8458"
                  - cell " " [ref=e1180]:
                    - generic [ref=e1181]:
                      - button "" [ref=e1182]:
                        - generic [ref=e1183]: 
                      - button "" [ref=e1184]:
                        - generic [ref=e1185]: 
                - generic [ref=e1186]:
                  - cell "First (& Middle) Name CXQSa pK" [ref=e1187]:
                    - generic [ref=e1188]:
                      - generic [ref=e1189]: First (& Middle) Name
                      - generic [ref=e1190]: CXQSa pK
                  - cell "Last Name LNigz" [ref=e1191]:
                    - generic [ref=e1192]:
                      - generic [ref=e1193]: Last Name
                      - generic [ref=e1194]: LNigz
            - row "Id 0290   First (& Middle) Name dhbrukkuzldhbrukkuzl Last Name ibuvlwtfsfibuvlwtfsf" [ref=e1196] [cursor=pointer]:
              - generic [ref=e1197]:
                - generic [ref=e1198]:
                  - cell "Id 0290" [ref=e1200]:
                    - generic [ref=e1201]:
                      - generic [ref=e1202]: Id
                      - generic [ref=e1203]: "0290"
                  - cell " " [ref=e1205]:
                    - generic [ref=e1206]:
                      - button "" [ref=e1207]:
                        - generic [ref=e1208]: 
                      - button "" [ref=e1209]:
                        - generic [ref=e1210]: 
                - generic [ref=e1211]:
                  - cell "First (& Middle) Name dhbrukkuzldhbrukkuzl" [ref=e1212]:
                    - generic [ref=e1213]:
                      - generic [ref=e1214]: First (& Middle) Name
                      - generic [ref=e1215]: dhbrukkuzldhbrukkuzl
                  - cell "Last Name ibuvlwtfsfibuvlwtfsf" [ref=e1216]:
                    - generic [ref=e1217]:
                      - generic [ref=e1218]: Last Name
                      - generic [ref=e1219]: ibuvlwtfsfibuvlwtfsf
            - row "Id 0294   First (& Middle) Name DHINA KARAN Last Name P" [ref=e1221] [cursor=pointer]:
              - generic [ref=e1222]:
                - generic [ref=e1223]:
                  - cell "Id 0294" [ref=e1225]:
                    - generic [ref=e1226]:
                      - generic [ref=e1227]: Id
                      - generic [ref=e1228]: "0294"
                  - cell " " [ref=e1230]:
                    - generic [ref=e1231]:
                      - button "" [ref=e1232]:
                        - generic [ref=e1233]: 
                      - button "" [ref=e1234]:
                        - generic [ref=e1235]: 
                - generic [ref=e1236]:
                  - cell "First (& Middle) Name DHINA KARAN" [ref=e1237]:
                    - generic [ref=e1238]:
                      - generic [ref=e1239]: First (& Middle) Name
                      - generic [ref=e1240]: DHINA KARAN
                  - cell "Last Name P" [ref=e1241]:
                    - generic [ref=e1242]:
                      - generic [ref=e1243]: Last Name
                      - generic [ref=e1244]: P
            - row "Id 09557   First (& Middle) Name Emily Last Name Jones" [ref=e1246] [cursor=pointer]:
              - generic [ref=e1247]:
                - generic [ref=e1248]:
                  - cell "Id 09557" [ref=e1250]:
                    - generic [ref=e1251]:
                      - generic [ref=e1252]: Id
                      - generic [ref=e1253]: "09557"
                  - cell " " [ref=e1255]:
                    - generic [ref=e1256]:
                      - button "" [ref=e1257]:
                        - generic [ref=e1258]: 
                      - button "" [ref=e1259]:
                        - generic [ref=e1260]: 
                - generic [ref=e1261]:
                  - cell "First (& Middle) Name Emily" [ref=e1262]:
                    - generic [ref=e1263]:
                      - generic [ref=e1264]: First (& Middle) Name
                      - generic [ref=e1265]: Emily
                  - cell "Last Name Jones" [ref=e1266]:
                    - generic [ref=e1267]:
                      - generic [ref=e1268]: Last Name
                      - generic [ref=e1269]: Jones
            - row "Id 0417   First (& Middle) Name Employee Last Name 1" [ref=e1271] [cursor=pointer]:
              - generic [ref=e1272]:
                - generic [ref=e1273]:
                  - cell "Id 0417" [ref=e1275]:
                    - generic [ref=e1276]:
                      - generic [ref=e1277]: Id
                      - generic [ref=e1278]: "0417"
                  - cell " " [ref=e1280]:
                    - generic [ref=e1281]:
                      - button "" [ref=e1282]:
                        - generic [ref=e1283]: 
                      - button "" [ref=e1284]:
                        - generic [ref=e1285]: 
                - generic [ref=e1286]:
                  - cell "First (& Middle) Name Employee" [ref=e1287]:
                    - generic [ref=e1288]:
                      - generic [ref=e1289]: First (& Middle) Name
                      - generic [ref=e1290]: Employee
                  - cell "Last Name 1" [ref=e1291]:
                    - generic [ref=e1292]:
                      - generic [ref=e1293]: Last Name
                      - generic [ref=e1294]: "1"
            - row "Id 0419   First (& Middle) Name Employee Last Name 2" [ref=e1296] [cursor=pointer]:
              - generic [ref=e1297]:
                - generic [ref=e1298]:
                  - cell "Id 0419" [ref=e1300]:
                    - generic [ref=e1301]:
                      - generic [ref=e1302]: Id
                      - generic [ref=e1303]: "0419"
                  - cell " " [ref=e1305]:
                    - generic [ref=e1306]:
                      - button "" [ref=e1307]:
                        - generic [ref=e1308]: 
                      - button "" [ref=e1309]:
                        - generic [ref=e1310]: 
                - generic [ref=e1311]:
                  - cell "First (& Middle) Name Employee" [ref=e1312]:
                    - generic [ref=e1313]:
                      - generic [ref=e1314]: First (& Middle) Name
                      - generic [ref=e1315]: Employee
                  - cell "Last Name 2" [ref=e1316]:
                    - generic [ref=e1317]:
                      - generic [ref=e1318]: Last Name
                      - generic [ref=e1319]: "2"
            - row "Id 1235   First (& Middle) Name FName Mname Last Name LName" [ref=e1321] [cursor=pointer]:
              - generic [ref=e1322]:
                - generic [ref=e1323]:
                  - cell "Id 1235" [ref=e1325]:
                    - generic [ref=e1326]:
                      - generic [ref=e1327]: Id
                      - generic [ref=e1328]: "1235"
                  - cell " " [ref=e1330]:
                    - generic [ref=e1331]:
                      - button "" [ref=e1332]:
                        - generic [ref=e1333]: 
                      - button "" [ref=e1334]:
                        - generic [ref=e1335]: 
                - generic [ref=e1336]:
                  - cell "First (& Middle) Name FName Mname" [ref=e1337]:
                    - generic [ref=e1338]:
                      - generic [ref=e1339]: First (& Middle) Name
                      - generic [ref=e1340]: FName Mname
                  - cell "Last Name LName" [ref=e1341]:
                    - generic [ref=e1342]:
                      - generic [ref=e1343]: Last Name
                      - generic [ref=e1344]: LName
        - navigation "Pagination Navigation" [ref=e1346]:
          - list [ref=e1347]:
            - listitem [ref=e1348]:
              - button "1" [ref=e1349] [cursor=pointer]
            - listitem [ref=e1350]:
              - button "2" [ref=e1351] [cursor=pointer]
            - listitem [ref=e1352]:
              - button "3" [ref=e1353] [cursor=pointer]
            - listitem [ref=e1354]:
              - button "4" [ref=e1355] [cursor=pointer]
            - listitem [ref=e1356]:
              - button "" [ref=e1357] [cursor=pointer]:
                - generic [ref=e1358]: 
    - generic [ref=e1359]:
      - paragraph [ref=e1360]: OrangeHRM OS 5.9
      - paragraph [ref=e1361]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e1362] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1   | import { Page, expect } from '@playwright/test';
  2   | import { EmployeeLocators } from '../Employee/EmployeeLocators'
  3   | import {BasePage} from '../BasePage'
  4   | import { Sidebar } from '../components/Sidebar';
  5   | import { EmployeeData } from './EmployeeData';
  6   | 
  7   | 
  8   | export class EmployeePage extends BasePage {
  9   | 
  10  |     private sidebar: Sidebar;
  11  | 
  12  |     constructor(page: Page) {
  13  |         super(page);
  14  |         this.sidebar = new Sidebar(page);
  15  |     }
  16  | 
  17  |    async navigateToAddEmployee() {
  18  | 
  19  |     await this.page.goto("/web/index.php/pim/viewEmployeeList");
  20  | 
  21  |     await this.sidebar.openPIM();
  22  | 
> 23  |     await this.page.click(EmployeeLocators.addEmployeeMenu);
      |                     ^ Error: page.click: Target page, context or browser has been closed
  24  | 
  25  | }
  26  | 
  27  |     async enterFirstName(firstName: string) {
  28  | 
  29  |         await this.page.fill(
  30  |             EmployeeLocators.firstName,
  31  |             firstName
  32  |         );
  33  | 
  34  |     }
  35  | 
  36  |     async enterMiddleName(middleName: string) {
  37  | 
  38  |         await this.page.fill(
  39  |             EmployeeLocators.middleName,
  40  |             middleName
  41  |         );
  42  | 
  43  |     }
  44  | 
  45  |     async enterLastName(lastName: string) {
  46  | 
  47  |         await this.page.fill(
  48  |             EmployeeLocators.lastName,
  49  |             lastName
  50  |         );
  51  | 
  52  |     }
  53  | 
  54  |     async clickSave() {
  55  | 
  56  |         await this.page.click(
  57  |             EmployeeLocators.saveButton
  58  |         );
  59  | 
  60  |     }
  61  | 
  62  |     async addEmployee(employee: EmployeeData) {
  63  | 
  64  |         await this.navigateToAddEmployee();
  65  | 
  66  |         await this.enterFirstName(employee.firstName);
  67  | 
  68  |         if (employee.middleName) {
  69  |             await this.enterMiddleName(employee.middleName);
  70  |         }
  71  | 
  72  |         await this.enterLastName(employee.lastName);
  73  | 
  74  |         await this.clickSave();
  75  | 
  76  |     }
  77  | 
  78  | //navigate
  79  |     async openEmployeeList() {
  80  | 
  81  |     await this.sidebar.openPIM();
  82  | 
  83  |     await this.page.click(
  84  |         EmployeeLocators.employeeListMenu
  85  |     );
  86  | 
  87  | }
  88  | 
  89  | 
  90  | //search
  91  | async searchEmployee(employeeName: string) {
  92  | 
  93  |     await this.page
  94  |         .locator(EmployeeLocators.employeeNameSearch).first()
  95  |         .fill(employeeName);
  96  | 
  97  |     await this.page
  98  |         .locator(EmployeeLocators.searchButton)
  99  |         .click();
  100 | 
  101 | }
  102 | 
  103 | async verifyEmployeeExists(employeeName: string) {
  104 | 
  105 |     await expect(
  106 |         this.page.locator(EmployeeLocators.employeeTable)
  107 |     ).toContainText(employeeName);
  108 | 
  109 | }
  110 | }
```