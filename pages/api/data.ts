export default async (req: any, res: any) => {
  console.log(`${process.env.NEXT_PUBLIC_SERVICE_URL || ""}/get_lat_long`);
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_URL || ""}/get_lat_long`
  )
    .then((res) => res.json())
    .then((res) => res);

  console.log({ data });

  const finalData = {
    type: "FeatureCollection",
    crs: {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:OGC:1.3:CRS84",
      },
    },
    features: data.map((x: any) => {
      return {
        type: "Feature",
        properties: {
          amount: x.AMOUNT,
          type: x.TYPE,
        },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(x.LONGITUDE.replace(",", ".")),
            parseFloat(x.LATITUDE.replace(",", ".")),
          ],
        },
      };
    }),
  };
  res.statusCode = 200;
  res.json(finalData);

  // res.json({
  //   type: "FeatureCollection",
  //   crs: {
  //     type: "name",
  //     properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
  //   },
  //   features: [
  //     {
  //       type: "Feature",
  //       properties: { amount: 146, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.5470270851818, -21.4891149172954],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 99, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-50.8965499292321, -22.2255283512678],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 85, type: "btnFurtoVeiculo" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-46.7607061381016, -23.5041320645147],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 72, type: "btnRouboCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.5271916221818, -21.4835091803636],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 70, type: "btnFurtoVeiculo" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.1716520505, -22.14369180675],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 69, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-46.7601150879757, -23.5031690323625],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 62, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-52.1416142920448, -21.7718125683531],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 60, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-46.7607061381016, -23.5041320645147],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 59, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.5727296572083, -21.3908042900833],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 58, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.3860296359999, -22.1267674069999],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 57, type: "btnRouboCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-46.7601150879757, -23.5031690323625],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 56, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-50.5750419818919, -22.4197620624054],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 54, type: "btnRouboCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-46.7607061381016, -23.5041320645147],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 54, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.4083198819999, -22.130683926],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 54, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-50.3900833462381, -22.7501136810476],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 52, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.1716520505, -22.14369180675],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 52, type: "btnRouboCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-50.2209647653461, -22.7872460033461],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 50, type: "btnFurtoCelular" },
  //       geometry: { type: "Point", coordinates: [-51.38428978, -22.125549641] },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 47, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.47647371, -22.0755186024166],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 47, type: "btnFurtoVeiculo" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.5470270851818, -21.4891149172954],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 44, type: "btnFurtoVeiculo" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-52.1655702605893, -22.5340160620714],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 43, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.4045261099999, -22.117991543],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 42, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.370741203, -22.178839049],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 42, type: "btnFurtoVeiculo" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-46.7601150879757, -23.5031690323625],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 42, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.3037557020208, -22.2138529286041],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 41, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.387973197, -22.121768597],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 38, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.39089419, -22.1315002929999],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 38, type: "btnFurtoCelular" },
  //       geometry: { type: "Point", coordinates: [-52.59259474, -22.56248514] },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 38, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.399824479, -22.123472233],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 38, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.5470270856466, -21.4891149169482],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 37, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-51.382150242, -22.1630437769999],
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: { amount: 37, type: "btnFurtoCelular" },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-50.416773802, -22.654420231],
  //       },
  //     },
  //   ],

  // types: "FeatureCollection",
  // featuress: [
  //   {
  //     type: "Feature",
  //     properties: { dbh: 0 },
  //     geometry: { type: "Point", coordinates: [-79.91746, 40.44356] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 12 },
  //     geometry: { type: "Point", coordinates: [-79.94606, 40.44961] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 6 },
  //     geometry: { type: "Point", coordinates: [-79.96474, 40.46283] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 2 },
  //     geometry: { type: "Point", coordinates: [-80.00949, 40.42532] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 12 },
  //     geometry: { type: "Point", coordinates: [-79.93531, 40.42282] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 12 },
  //     geometry: { type: "Point", coordinates: [-79.91199, 40.37286] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.93244, 40.43484] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-79.92158, 40.43892] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 17 },
  //     geometry: { type: "Point", coordinates: [-79.97294, 40.40908] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 13 },
  //     geometry: { type: "Point", coordinates: [-79.97291, 40.42896] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 9 },
  //     geometry: { type: "Point", coordinates: [-80.05708, 40.45932] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.91069, 40.37747] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 4 },
  //     geometry: { type: "Point", coordinates: [-79.98257, 40.43154] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 5 },
  //     geometry: { type: "Point", coordinates: [-79.99177, 40.42093] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 2 },
  //     geometry: { type: "Point", coordinates: [-80.02488, 40.41999] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 1 },
  //     geometry: { type: "Point", coordinates: [-79.99531, 40.41504] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 8 },
  //     geometry: { type: "Point", coordinates: [-80.0148, 40.43467] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 6 },
  //     geometry: { type: "Point", coordinates: [-80.02489, 40.41446] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-80.01647, 40.40107] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 0 },
  //     geometry: { type: "Point", coordinates: [-80.02872, 40.39468] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 16 },
  //     geometry: { type: "Point", coordinates: [-80.00902, 40.38418] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 22 },
  //     geometry: { type: "Point", coordinates: [-80.05166, 40.43603] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 7 },
  //     geometry: { type: "Point", coordinates: [-80.0468, 40.43461] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 11 },
  //     geometry: { type: "Point", coordinates: [-80.03639, 40.44505] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 7 },
  //     geometry: { type: "Point", coordinates: [-80.03393, 40.43546] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 20 },
  //     geometry: { type: "Point", coordinates: [-80.05113, 40.43404] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 2 },
  //     geometry: { type: "Point", coordinates: [-79.93404, 40.47953] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-79.88148, 40.45954] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.9201, 40.47591] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 6 },
  //     geometry: { type: "Point", coordinates: [-79.92554, 40.46622] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.94818, 40.4595] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 28 },
  //     geometry: { type: "Point", coordinates: [-79.93549, 40.48189] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 23 },
  //     geometry: { type: "Point", coordinates: [-79.89888, 40.42317] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 29 },
  //     geometry: { type: "Point", coordinates: [-79.94479, 40.40905] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-80.01717, 40.46426] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 9 },
  //     geometry: { type: "Point", coordinates: [-80.02638, 40.46093] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 22 },
  //     geometry: { type: "Point", coordinates: [-79.93099, 40.45362] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 11 },
  //     geometry: { type: "Point", coordinates: [-79.92366, 40.42568] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 2 },
  //     geometry: { type: "Point", coordinates: [-79.9568, 40.44844] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 14 },
  //     geometry: { type: "Point", coordinates: [-79.9489, 40.45985] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 2 },
  //     geometry: { type: "Point", coordinates: [-79.91629, 40.4733] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 19 },
  //     geometry: { type: "Point", coordinates: [-79.90083, 40.42244] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 2 },
  //     geometry: { type: "Point", coordinates: [-79.96904, 40.44207] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 3 },
  //     geometry: { type: "Point", coordinates: [-80.00736, 40.4574] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 12 },
  //     geometry: { type: "Point", coordinates: [-79.93248, 40.46246] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 9 },
  //     geometry: { type: "Point", coordinates: [-79.93568, 40.48163] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 15 },
  //     geometry: { type: "Point", coordinates: [-79.92572, 40.46593] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-79.93204, 40.46653] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.88447, 40.45094] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 19 },
  //     geometry: { type: "Point", coordinates: [-79.92534, 40.42169] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 36 },
  //     geometry: { type: "Point", coordinates: [-79.90062, 40.42502] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.94987, 40.4215] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 8 },
  //     geometry: { type: "Point", coordinates: [-79.94745, 40.4583] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 5 },
  //     geometry: { type: "Point", coordinates: [-79.91746, 40.44368] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 11 },
  //     geometry: { type: "Point", coordinates: [-79.94136, 40.40568] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 3 },
  //     geometry: { type: "Point", coordinates: [-79.98904, 40.46744] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 9 },
  //     geometry: { type: "Point", coordinates: [-80.01252, 40.45821] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 15 },
  //     geometry: { type: "Point", coordinates: [-79.89635, 40.43649] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 32 },
  //     geometry: { type: "Point", coordinates: [-79.94086, 40.4806] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 20 },
  //     geometry: { type: "Point", coordinates: [-79.92815, 40.44201] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 17 },
  //     geometry: { type: "Point", coordinates: [-79.91607, 40.42572] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 11 },
  //     geometry: { type: "Point", coordinates: [-79.94567, 40.40739] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-79.92082, 40.45771] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-80.02301, 40.45373] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 26 },
  //     geometry: { type: "Point", coordinates: [-79.90841, 40.4471] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 5 },
  //     geometry: { type: "Point", coordinates: [-79.93042, 40.45842] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 4 },
  //     geometry: { type: "Point", coordinates: [-79.9858, 40.44431] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 7 },
  //     geometry: { type: "Point", coordinates: [-80.01556, 40.48392] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 19 },
  //     geometry: { type: "Point", coordinates: [-79.92409, 40.42976] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 18 },
  //     geometry: { type: "Point", coordinates: [-79.90916, 40.43699] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 18 },
  //     geometry: { type: "Point", coordinates: [-79.93322, 40.43706] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 6 },
  //     geometry: { type: "Point", coordinates: [-79.93512, 40.42297] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 11 },
  //     geometry: { type: "Point", coordinates: [-79.94751, 40.448] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 5 },
  //     geometry: { type: "Point", coordinates: [-79.96532, 40.46236] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 9 },
  //     geometry: { type: "Point", coordinates: [-80.02626, 40.46095] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 28 },
  //     geometry: { type: "Point", coordinates: [-79.89643, 40.4709] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 33 },
  //     geometry: { type: "Point", coordinates: [-79.92139, 40.43893] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 23 },
  //     geometry: { type: "Point", coordinates: [-79.93075, 40.4537] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 27 },
  //     geometry: { type: "Point", coordinates: [-79.97275, 40.4092] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: -1 },
  //     geometry: { type: "Point", coordinates: [-79.97291, 40.42903] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 9 },
  //     geometry: { type: "Point", coordinates: [-80.05702, 40.45931] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 21 },
  //     geometry: { type: "Point", coordinates: [-79.91458, 40.37661] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 3 },
  //     geometry: { type: "Point", coordinates: [-79.98257, 40.43163] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 12 },
  //     geometry: { type: "Point", coordinates: [-79.99182, 40.42098] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 8 },
  //     geometry: { type: "Point", coordinates: [-80.02467, 40.42132] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 3 },
  //     geometry: { type: "Point", coordinates: [-79.99538, 40.41503] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 11 },
  //     geometry: { type: "Point", coordinates: [-80.01479, 40.43473] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 10 },
  //     geometry: { type: "Point", coordinates: [-80.0249, 40.41455] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 8 },
  //     geometry: { type: "Point", coordinates: [-80.0169, 40.40108] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 30 },
  //     geometry: { type: "Point", coordinates: [-80.02882, 40.39472] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 26 },
  //     geometry: { type: "Point", coordinates: [-80.05036, 40.43446] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 7 },
  //     geometry: { type: "Point", coordinates: [-80.04681, 40.43454] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 12 },
  //     geometry: { type: "Point", coordinates: [-80.03631, 40.4451] },
  //   },
  //   {
  //     type: "Feature",
  //     properties: { dbh: 19 },
  //     geometry: { type: "Point", coordinates: [-80.05068, 40.43413] },
  //   },
  // ],
  // });
};
