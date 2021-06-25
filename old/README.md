# crdunsto nps midterm

live demo: http://nps.cecildunston.com
repository (SSH):  git@github.com:ist363-f18/midterm-project-cecildunston


#Styles	-------------------------------------------------

Bootstrap 4
AJS Animations
CSS file @import:
-	Justifications:
	-	all browsers up to 5.5 ie
	-	compartmentalization of files/folders.
	-	scalability
	-	portability
-	Site Starter files are in a separate import.


#Dev Environment	-------------------------------------------------

Apache
-	local site "nps.test" in wampserver, via virtualhost.
-	.htaccess rules to redirect from old cecildunston.com/nps url to the new nps .subdomain
Github SSH
-	gitignore node-modules(for server and git repo) & bower(for git repo)
NPM
Http-Server
Coming Soon:
-	Gulp Coming Soon
-	Sass Coming Soon


# AngularJS	-------------------------------------------------

App:
-	$routeProvider:
	-	Hasthags removed!
	-	10/15 - reload, root-relative work on server.

Data:
-	data/nps.json >> contents
-	scalable. can import/export with .csv/excel.
-	deployable to cms env as well. 

Controllers:
-	$locationChangeStart:
-	Data sorting based on location
-	Nav functionality soon.

Directives: 
-	Benefits:
	-	Maintain Controller complexity
-	Navigation:
	-	Links populates dom
	-	Clock ($scope.tick)
-	whichLocation:
	-	Watch $rootScope.pageName
	-	Page-specific transition actions
-	Viewport:
	-	Watch screen width
	-	Output: viewType and viewPort
		-	ifSize() Links populates BS4
			-	breakpoints defined in ajs
			-	ajs $digest
		-	styles on ngView, body
-	Scroll:
	-	Watch pageYOffset of $window
	-	Output Scroll
		-	ng-class on body
	-	ajs $apply to scope


#Other	-------------------------------------------------

Custom Typography (NPS's Actual brand identity system fonts - Rawlinson and Frutiger)
FTP & Deployment:
-	Filezilla to deploy to cecildunston.com server (Hostgator)
-	NPS-specific FTP account added soon.


#Notes	-------------------------------------------------

- 	"!important" used only after testing against bootstrap, at different dom levels.
-	For some reason Denali and King's Canyon were not included in the design?
	-	King's without apos in Article mockup
-	Was looking for best way to write JSON dates as obj?
-	had to split States tuples into separate arrays by abbr and name.
-	Add to Seqoia obj to nps.json > home.popular[title = "sequoia"], or under nps.json > page?