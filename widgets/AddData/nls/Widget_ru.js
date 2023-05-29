// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",noOptionsConfigured:"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0446\u0438\u0438",tabs:{search:"\u041f\u043e\u0438\u0441\u043a",url:"URL-\u0430\u0434\u0440\u0435\u0441",file:"\u0424\u0430\u0439\u043b"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",
layerInaccessible:"\u0421\u043b\u043e\u0439 \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d.",loadError:"AddData, \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c:",searchBox:{search:"\u041f\u043e\u0438\u0441\u043a",placeholder:"\u041f\u043e\u0438\u0441\u043a..."},bboxOption:{bbox:"\u0412 \u043a\u0430\u0440\u0442\u0435"},scopeOptions:{anonymousContent:"\u0420\u0435\u0441\u0443\u0440\u0441\u044b",myContent:"\u041c\u043e\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u044b",
myOrganization:"\u041c\u043e\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f",curated:"\u041a\u0443\u0440\u0430\u0442\u043e\u0440",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:",relevance:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",owner:"\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446",rating:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",
views:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b",date:"\u0414\u0430\u0442\u0430",switchOrder:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f"},typeOptions:{prompt:"\u0422\u0438\u043f",mapService:"\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",featureService:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
imageService:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439",vectorTileService:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b."},paging:{first:"\x3c\x3c",firstTip:"\u041f\u0435\u0440\u0432\u044b\u0439",
previous:"\x3c",previousTip:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439",next:"\x3e",nextTip:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442",itemPlural:"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"},item:{actions:{add:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",close:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",remove:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
details:"\u0414\u0435\u0442\u0430\u043b\u0438",done:"\u0413\u043e\u0442\u043e\u0432\u043e",editName:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u044f"},messages:{adding:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",removing:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",added:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e",addFailed:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
unsupported:"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f"},typeByOwnerPattern:"{type} \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 {owner}",dateFormat:"MMMM d, yyyy",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'ratings", "comments": "comments", "views": "views'},types:{"Map Service":"\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
"Feature Service":"\u0421\u0435\u0440\u0432\u0438\u0441 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432","Image Service":"\u0421\u0435\u0440\u0432\u0438\u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439","Vector Tile Service":"\u0421\u0435\u0440\u0432\u0438\u0441 \u0432\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0445 \u043b\u0438\u0441\u0442\u043e\u0432",WMS:"WMS",KML:"KML"}}},
addFromUrl:{type:"\u0422\u0438\u043f",url:"URL-\u0430\u0434\u0440\u0435\u0441",types:{ArcGIS:"\u0412\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441 ArcGIS Server",WMS:"\u0412\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441 WMS OGC",WMTS:"\u0412\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441 WMTS OGC",WFS:"\u0412\u0435\u0431-\u0441\u0435\u0440\u0432\u0438\u0441 WFS OGC",KML:"\u0424\u0430\u0439\u043b KML",GeoRSS:"\u0424\u0430\u0439\u043b GeoRSS",CSV:"\u0424\u0430\u0439\u043b CSV"},samplesHint:"URL \u043e\u0431\u0440\u0430\u0437\u0446\u0430",
invalidURL:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 http:// \u0438\u043b\u0438 https://. "},addFromFile:{intro:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044c \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0442\u0438\u043f\u043e\u0432:",
types:{Shapefile:"\u0428\u0435\u0439\u043f-\u0444\u0430\u0439\u043b (.zip, ZIP-\u0430\u0440\u0445\u0438\u0432, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0448\u0435\u0439\u043f-\u0444\u0430\u0439\u043b\u0430)",CSV:"\u0424\u0430\u0439\u043b CSV (.csv, \u0441 \u0430\u0434\u0440\u0435\u0441\u0430\u043c\u0438 \u0438\u043b\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430\u043c\u0438 \u0448\u0438\u0440\u043e\u0442\u044b \u0438 \u0434\u043e\u043b\u0433\u043e\u0442\u044b (\u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f\u043c\u0438: \u0437\u0430\u043f\u044f\u0442\u043e\u0439, \u0442\u043e\u0447\u043a\u043e\u0439 \u0441 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u0438\u043b\u0438 \u0442\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u0435\u0439))",
KML:"\u0424\u0430\u0439\u043b KML (.kml)",GPX:"\u0424\u0430\u0439\u043b GPX (.gpx, \u043e\u0431\u043c\u0435\u043d\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 GPS)",GeoJSON:"\u0424\u0430\u0439\u043b GeoJSON (.geo.json \u0438\u043b\u0438 .geojson)"},generalizeOn:"\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u043b\u044f \u0432\u0435\u0431-\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
dropOrBrowse:"\u041f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",browse:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",invalidType:"\u042d\u0442\u043e\u0442 \u0442\u0438\u043f \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f.",addingPattern:"{filename}: \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",
addFailedPattern:"{filename}: \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c",featureCountPattern:"{filename}: {count} \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",invalidTypePattern:"{filename}: \u044d\u0442\u043e\u0442 \u0442\u0438\u043f \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f",maxFeaturesAllowedPattern:"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 {count} \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
layerNamePattern:"{filename} \u2013 {name}",generalIssue:"\u0418\u043c\u0435\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430.",kmlProjectionMismatch:"\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u0430\u0440\u0442\u044b \u0438 \u0441\u043b\u043e\u044f KML \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442, \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430.",
featureLocationsCouldNotBeFound:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b: \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 \u0438\u043b\u0438 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u043f\u043e\u043b\u044f \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0424\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043a\u0430\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0430."},
layerList:{caption:"\u0421\u043b\u043e\u0438",noLayersAdded:"\u0421\u043b\u043e\u0438 \u043d\u0435 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b.",removeLayer:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043b\u043e\u0439",back:"\u041d\u0430\u0437\u0430\u0434"},_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});