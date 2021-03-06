var Script = function () {

        var exposureByRating = {
            ratings:
                [
                    {
                        rating:"AAA to AA",
                        exposures:[
                            {date:"06/30/2014" , exposure:92967},
                            {date:"07/31/2014" , exposure:105476},
                            {date:"08/29/2014" , exposure:82362},
                            {date:"09/30/2014" , exposure:77042},
                            {date:"10/31/2014" , exposure:591426},
                            {date:"11/30/2014" , exposure:653491},
                            {date:"12/31/2014" , exposure:595056},
                            {date:"01/30/2015" , exposure:645505},
                            {date:"02/27/2015" , exposure:600890},
                            {date:"03/31/2015" , exposure:717583},
                            {date:"04/30/2015" , exposure:885431},
                            {date:"05/29/2015" , exposure:972477},
                            {date:"06/30/2015" , exposure:695803},
                            {date:"07/31/2015" , exposure:564050},
                            {date:"08/31/2015" , exposure:746531},
                            {date:"09/30/2015" , exposure:404725},
                            {date:"10/30/2015" , exposure:696625},
                            {date:"11/30/2015" , exposure:619767},
                            {date:"12/31/2015" , exposure:478999},
                            {date:"01/29/2016" , exposure:608836},
                            {date:"02/29/2016" , exposure:778690},
                            {date:"03/31/2016" , exposure:423036},
                            {date:"04/29/2016" , exposure:684866},
                            {date:"05/31/2016" , exposure:790937},
                            {date:"06/30/2016" , exposure:472530}
                        ]
                    },
                    {
                        rating:"A+ to A-",
                        exposures:[
                            {date:"06/30/2014" , exposure:804867},
                            {date:"07/31/2014" , exposure:694476},
                            {date:"08/29/2014" , exposure:596842},
                            {date:"09/30/2014" , exposure:633772},
                            {date:"10/31/2014" , exposure:1232640},
                            {date:"11/30/2014" , exposure:1619149},
                            {date:"12/31/2014" , exposure:1263684},
                            {date:"01/30/2015" , exposure:1263232},
                            {date:"02/27/2015" , exposure:1372847},
                            {date:"03/31/2015" , exposure:1302494},
                            {date:"04/30/2015" , exposure:1548753},
                            {date:"05/29/2015" , exposure:1416596},
                            {date:"06/30/2015" , exposure:1286431},
                            {date:"07/31/2015" , exposure:1548163},
                            {date:"08/31/2015" , exposure:1478778},
                            {date:"09/30/2015" , exposure:1197761},
                            {date:"10/30/2015" , exposure:1718073},
                            {date:"11/30/2015" , exposure:1443389},
                            {date:"12/31/2015" , exposure:1581513},
                            {date:"01/29/2016" , exposure:1419379},
                            {date:"02/29/2016" , exposure:1783132},
                            {date:"03/31/2016" , exposure:1424239},
                            {date:"04/29/2016" , exposure:1271833},
                            {date:"05/31/2016" , exposure:1237743},
                            {date:"06/30/2016" , exposure:1471942}
                        ]
                    },
                    {
                        rating:"BBB+ to BBB-",
                        exposures:[
                            {date:"06/30/2014" , exposure:4485706},
                            {date:"07/31/2014" , exposure:4465749},
                            {date:"08/29/2014" , exposure:3697121},
                            {date:"09/30/2014" , exposure:3510453},
                            {date:"10/31/2014" , exposure:4124645},
                            {date:"11/30/2014" , exposure:5150932},
                            {date:"12/31/2014" , exposure:4303144},
                            {date:"01/30/2015" , exposure:4162620},
                            {date:"02/27/2015" , exposure:3842227},
                            {date:"03/31/2015" , exposure:3864223},
                            {date:"04/30/2015" , exposure:5134589},
                            {date:"05/29/2015" , exposure:4171351},
                            {date:"06/30/2015" , exposure:3190990},
                            {date:"07/31/2015" , exposure:4233640},
                            {date:"08/31/2015" , exposure:3735504},
                            {date:"09/30/2015" , exposure:3343935},
                            {date:"10/30/2015" , exposure:4100323},
                            {date:"11/30/2015" , exposure:3834916},
                            {date:"12/31/2015" , exposure:3920709},
                            {date:"01/29/2016" , exposure:4095868},
                            {date:"02/29/2016" , exposure:4123778},
                            {date:"03/31/2016" , exposure:3779394},
                            {date:"04/29/2016" , exposure:5327040},
                            {date:"05/31/2016" , exposure:4876900},
                            {date:"06/30/2016" , exposure:4631355}
                        ]
                    },
                    {
                        rating:"BB+ to BB-",
                        exposures:[
                            {date:"06/30/2014" , exposure:3671667},
                            {date:"07/31/2014" , exposure:3862085},
                            {date:"08/29/2014" , exposure:4444916},
                            {date:"09/30/2014" , exposure:2946453},
                            {date:"10/31/2014" , exposure:2175228},
                            {date:"11/30/2014" , exposure:3868631},
                            {date:"12/31/2014" , exposure:3468845},
                            {date:"01/30/2015" , exposure:3628505},
                            {date:"02/27/2015" , exposure:4141051},
                            {date:"03/31/2015" , exposure:4522161},
                            {date:"04/30/2015" , exposure:3701185},
                            {date:"05/29/2015" , exposure:4194508},
                            {date:"06/30/2015" , exposure:3320116},
                            {date:"07/31/2015" , exposure:3729530},
                            {date:"08/31/2015" , exposure:3229390},
                            {date:"09/30/2015" , exposure:3832959},
                            {date:"10/30/2015" , exposure:3785467},
                            {date:"11/30/2015" , exposure:4587111},
                            {date:"12/31/2015" , exposure:5042094},
                            {date:"01/29/2016" , exposure:5196147},
                            {date:"02/29/2016" , exposure:5389603},
                            {date:"03/31/2016" , exposure:4445955},
                            {date:"04/29/2016" , exposure:4877192},
                            {date:"05/31/2016" , exposure:4589506},
                            {date:"06/30/2016" , exposure:4916198}
                        ]
                    },
                    {
                        rating:"B+ to B-",
                        exposures:[
                            {date:"06/30/2014" , exposure:10166848},
                            {date:"07/31/2014" , exposure:8805346},
                            {date:"08/29/2014" , exposure:9054505},
                            {date:"09/30/2014" , exposure:10869669},
                            {date:"10/31/2014" , exposure:4879194},
                            {date:"11/30/2014" , exposure:7028024},
                            {date:"12/31/2014" , exposure:6578804},
                            {date:"01/30/2015" , exposure:6763723},
                            {date:"02/27/2015" , exposure:6182831},
                            {date:"03/31/2015" , exposure:8748681},
                            {date:"04/30/2015" , exposure:7608673},
                            {date:"05/29/2015" , exposure:7742037},
                            {date:"06/30/2015" , exposure:6394224},
                            {date:"07/31/2015" , exposure:7909749},
                            {date:"08/31/2015" , exposure:7207785},
                            {date:"09/30/2015" , exposure:7883182},
                            {date:"10/30/2015" , exposure:6879862},
                            {date:"11/30/2015" , exposure:6735147},
                            {date:"12/31/2015" , exposure:6902779},
                            {date:"01/29/2016" , exposure:7389746},
                            {date:"02/29/2016" , exposure:7836491},
                            {date:"03/31/2016" , exposure:6816551},
                            {date:"04/29/2016" , exposure:5958267},
                            {date:"05/31/2016" , exposure:5554307},
                            {date:"06/30/2016" , exposure:7668765}
                        ]
                    },
                    {
                        rating:"Not Rated",
                        exposures:[
                            {date:"06/30/2014" , exposure:1511192},
                            {date:"07/31/2014" , exposure:957776},
                            {date:"08/29/2014" , exposure:732231},
                            {date:"09/30/2014" , exposure:1101522},
                            {date:"10/31/2014" , exposure:2487097},
                            {date:"11/30/2014" , exposure:5697166},
                            {date:"12/31/2014" , exposure:4295964},
                            {date:"01/30/2015" , exposure:9116100},
                            {date:"02/27/2015" , exposure:1663960},
                            {date:"03/31/2015" , exposure:2469470},
                            {date:"04/30/2015" , exposure:8994573},
                            {date:"05/29/2015" , exposure:4342763},
                            {date:"06/30/2015" , exposure:2630543},
                            {date:"07/31/2015" , exposure:2341063},
                            {date:"08/31/2015" , exposure:2002377},
                            {date:"09/30/2015" , exposure:2742290},
                            {date:"10/30/2015" , exposure:3645966},
                            {date:"11/30/2015" , exposure:4480510},
                            {date:"12/31/2015" , exposure:3780383},
                            {date:"01/29/2016" , exposure:3912337},
                            {date:"02/29/2016" , exposure:5207502},
                            {date:"03/31/2016" , exposure:5060198},
                            {date:"04/29/2016" , exposure:5400522},
                            {date:"05/31/2016" , exposure:6509450},
                            {date:"06/30/2016" , exposure:6812963}
                        ]
                    },
                    {
                        rating:"CCC+ and Below",
                        exposures:[
                            {date:"06/30/2014" , exposure:1216862},
                            {date:"07/31/2014" , exposure:1345800},
                            {date:"08/29/2014" , exposure:1546198},
                            {date:"09/30/2014" , exposure:1171325},
                            {date:"10/31/2014" , exposure:1082802},
                            {date:"11/30/2014" , exposure:1361671},
                            {date:"12/31/2014" , exposure:1372545},
                            {date:"01/30/2015" , exposure:2613331},
                            {date:"02/27/2015" , exposure:2544695},
                            {date:"03/31/2015" , exposure:1968540},
                            {date:"04/30/2015" , exposure:1679315},
                            {date:"05/29/2015" , exposure:2200636},
                            {date:"06/30/2015" , exposure:1328640},
                            {date:"07/31/2015" , exposure:810715},
                            {date:"08/31/2015" , exposure:974999},
                            {date:"09/30/2015" , exposure:1233060},
                            {date:"10/30/2015" , exposure:1168311},
                            {date:"11/30/2015" , exposure:1003460},
                            {date:"12/31/2015" , exposure:836840},
                            {date:"01/29/2016" , exposure:925484},
                            {date:"02/29/2016" , exposure:1032542},
                            {date:"03/31/2016" , exposure:681773},
                            {date:"04/29/2016" , exposure:825674},
                            {date:"05/31/2016" , exposure:1678867},
                            {date:"06/30/2016" , exposure:1261178}
                        ]
                    },
                    {
                        rating:"Pooled",
                        exposures:[
                            {date:"06/30/2014" , exposure:974179},
                            {date:"07/31/2014" , exposure:336503},
                            {date:"08/29/2014" , exposure:224021},
                            {date:"09/30/2014" , exposure:268093},
                            {date:"10/31/2014" , exposure:1246217},
                            {date:"11/30/2014" , exposure:1009497},
                            {date:"12/31/2014" , exposure:1412619},
                            {date:"01/30/2015" , exposure:280398},
                            {date:"02/27/2015" , exposure:2557483},
                            {date:"03/31/2015" , exposure:1665212},
                            {date:"04/30/2015" , exposure:445821},
                            {date:"05/29/2015" , exposure:1511349},
                            {date:"06/30/2015" , exposure:633065},
                            {date:"07/31/2015" , exposure:647443},
                            {date:"08/31/2015" , exposure:1044834},
                            {date:"09/30/2015" , exposure:329920},
                            {date:"10/30/2015" , exposure:119582},
                            {date:"11/30/2015" , exposure:194293},
                            {date:"12/31/2015" , exposure:59858},
                            {date:"01/29/2016" , exposure:55805},
                            {date:"02/29/2016" , exposure:73418},
                            {date:"03/31/2016" , exposure:67664},
                            {date:"04/29/2016" , exposure:289521},
                            {date:"05/31/2016" , exposure:367056},
                            {date:"06/30/2016" , exposure:190695}
                        ]
                    },
                    {
                        rating:"No Limit",
                        exposures:[
                            {date:"06/30/2014" , exposure:1068943},
                            {date:"07/31/2014" , exposure:1076649},
                            {date:"08/29/2014" , exposure:820610},
                            {date:"09/30/2014" , exposure:948785},
                            {date:"10/31/2014" , exposure:494212},
                            {date:"11/30/2014" , exposure:673565},
                            {date:"12/31/2014" , exposure:979276},
                            {date:"01/30/2015" , exposure:973127},
                            {date:"02/27/2015" , exposure:985676},
                            {date:"03/31/2015" , exposure:2668109},
                            {date:"04/30/2015" , exposure:2465622},
                            {date:"05/29/2015" , exposure:2291167},
                            {date:"06/30/2015" , exposure:2234124},
                            {date:"07/31/2015" , exposure:2340248},
                            {date:"08/31/2015" , exposure:2318582},
                            {date:"09/30/2015" , exposure:2803632},
                            {date:"10/30/2015" , exposure:3191993},
                            {date:"11/30/2015" , exposure:3384141},
                            {date:"12/31/2015" , exposure:3415199},
                            {date:"01/29/2016" , exposure:3552446},
                            {date:"02/29/2016" , exposure:3763759},
                            {date:"03/31/2016" , exposure:3239421},
                            {date:"04/29/2016" , exposure:2772710},
                            {date:"05/31/2016" , exposure:2733898},
                            {date:"06/30/2016" , exposure:3523514}
                        ]
                    },
                    {
                        rating:"Defaulted",
                        exposures:[
                            {date:"06/30/2014" , exposure:26818},
                            {date:"07/31/2014" , exposure:38900},
                            {date:"08/29/2014" , exposure:641907},
                            {date:"09/30/2014" , exposure:641232},
                            {date:"10/31/2014" , exposure:197754},
                            {date:"11/30/2014" , exposure:4906616},
                            {date:"12/31/2014" , exposure:5344213},
                            {date:"01/30/2015" , exposure:107304},
                            {date:"02/27/2015" , exposure:70124},
                            {date:"03/31/2015" , exposure:64853},
                            {date:"04/30/2015" , exposure:52427},
                            {date:"05/29/2015" , exposure:51525},
                            {date:"06/30/2015" , exposure:44129},
                            {date:"07/31/2015" , exposure:350441},
                            {date:"08/31/2015" , exposure:31460},
                            {date:"09/30/2015" , exposure:34301},
                            {date:"10/30/2015" , exposure:5077423},
                            {date:"11/30/2015" , exposure:7234464},
                            {date:"12/31/2015" , exposure:3701561},
                            {date:"01/29/2016" , exposure:13622204},
                            {date:"02/29/2016" , exposure:14306799},
                            {date:"03/31/2016" , exposure:5859544},
                            {date:"04/29/2016" , exposure:14143588},
                            {date:"05/31/2016" , exposure:12624503},
                            {date:"06/30/2016" , exposure:13615544}
                        ]
                    }
                ]
        };
        
    var exposureByRating;
    var datasets = [];
    var labels = exposureByRating.ratings[0].exposures.map(function(exposure) { return exposure.date; });

    for (i = 0; i < exposureByRating.ratings.length; i++)
    {
        var data = new Object();
        data.label = exposureByRating.ratings[i].rating;
        data.backgroundColor = randomCssRgba();
        data.data = exposureByRating.ratings[i].exposures.map(function(exposure) {
            return exposure.exposure;
        });
        datasets.push(data);
    }
    var exposureByRatingChartData = {
        labels : labels,
        datasets : datasets
    };
    function randomCssRgba () {
        var rgbaArray = [randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), randomNumber(50, 100) * 0.01];
        return 'rgba(' + rgbaArray.join(',') + ')';
    }
    function randomNumber(min ,max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    var barChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: 'Chart1',
                backgroundColor : "rgba(220,220,220,0.5)",
                data : [65,59,90,81,56,55,40]
            },
            {
                label: 'Chart2',
                backgroundColor : "rgba(151,187,205,0.5)",
                data : [28,48,40,19,96,27,100]
            }
        ]
    };

    new Chart(document.getElementById("bar").getContext("2d"), 
        {
            type: 'bar',
            data: exposureByRatingChartData,
            options: {
                scales: {
                    xAxes: [{
                            stacked: true
                    }],
                    yAxes: [{
                            stacked: true
                    }]
                }
            }
        });

}();