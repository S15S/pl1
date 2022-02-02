# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?avoid=highways&origin=Ojibway+Nature+Reserve&&mode=bicycling&destination=Malden+Park&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJP_Z5jQUuO4gRz4EnDI7aopk",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ5favuektO4gRlDUGKAi8c1g",
         "types" : [ "establishment", "park", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 42.2768287,
               "lng" : -83.0591462
            },
            "southwest" : {
               "lat" : 42.2578916,
               "lng" : -83.0752864
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "3.7 km",
                  "value" : 3675
               },
               "duration" : {
                  "text" : "11 mins",
                  "value" : 686
               },
               "end_address" : "Malden Park, 4200 Malden Rd, Windsor, ON N9C 0C5, Canada",
               "end_location" : {
                  "lat" : 42.2759872,
                  "lng" : -83.0591462
               },
               "start_address" : "Ojibway Prairie Provincial Nature Reserve, 5200 Matchette Rd, Windsor, ON N9C 4E8, Canada",
               "start_location" : {
                  "lat" : 42.2578916,
                  "lng" : -83.0752864
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2138
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 382
                     },
                     "end_location" : {
                        "lat" : 42.2768287,
                        "lng" : -83.0710801
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eMatchette Rd\u003c/b\u003e toward \u003cb\u003eTitcombe Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "yn|`Gps`zN}@K{@Im`@yDsI}@{C[eBScAK}CYcCUe@E{AOgAOmAMw@K[CsAOkAMyCYaAKoAQi@Mu@Q_@KsDeAkA]oA[k@Qs@S_GcB"
                     },
                     "start_location" : {
                        "lat" : 42.2578916,
                        "lng" : -83.0752864
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "31 m",
                        "value" : 31
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 42.2767495,
                        "lng" : -83.070714
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ee`aGfy_zNNiA"
                     },
                     "start_location" : {
                        "lat" : 42.2768287,
                        "lng" : -83.0710801
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1164
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 204
                     },
                     "end_location" : {
                        "lat" : 42.2729152,
                        "lng" : -83.05932079999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ud`aG|v_zNbA\\PDd@NZFPBH?H?FCFGDGDKBMFYd@sBXoA`@qBv@eEf@wCDUl@mDd@wCNeAP_BDWHc@Jw@L_AHk@@AHc@P{@PaARaANo@Lq@Hi@@U@O@QDWFa@H_@BKJOJ]RcA?CH]BK?E?I?K?K?KBODSBO?I?GAECCEAC?G?C@E?C?EAAAAEAE?I?K@M"
                     },
                     "start_location" : {
                        "lat" : 42.2767495,
                        "lng" : -83.070714
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 342
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 93
                     },
                     "end_location" : {
                        "lat" : 42.2759872,
                        "lng" : -83.0591462
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMalden Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 3\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wl_aGvo}yNc@AwEKoDIiDIC?K?"
                     },
                     "start_location" : {
                        "lat" : 42.2729152,
                        "lng" : -83.05932079999999
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "yn|`Gps`zNyBUak@wFcNuAiD[cD_@uFm@eFg@qC]_B_@sEqA{F_B_GcBNiAtAb@`AVZBPCLOv@gDz@aE~A}Ir@cEt@}El@sEb@qCfAoFV{ABe@Fi@PaAN[^aBLs@?m@L}@AMIEU@IACGAO@YuQa@O?"
         },
         "summary" : "Matchette Rd",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
