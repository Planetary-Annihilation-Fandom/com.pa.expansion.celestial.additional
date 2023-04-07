var newBuild = {

    "/pa/units/orbital/solaris/solaris.json":["orbital",0,{row:1,column:0}],
    "/pa/units/orbital/c_l_orbital_laser/c_l_orbital_laser.json":["L_orbital",0,{row:1,column:1}],

    "/pa/units/land/recon/c_radar/c_radar.json":["utility",0,{row:2,column:2}],
    "/pa/units/land/recon/c_radar_adv/c_radar_adv.json":["utility",1,{row:1,column:2}],
    "/pa/units/land/recon/c_system_radar/c_system_radar.json":["utility",0,{row:0,column:2}],
    "/pa/units/land/recon/c_l_radar/c_l_radar.json":["L_utility",0,{row:2,column:2}],
    "/pa/units/land/recon/c_l_radar_adv/c_l_radar_adv.json":["L_utility",1,{row:1,column:2}],
    "/pa/units/land/recon/c_l_system_radar/c_l_system_radar.json":["L_utility",0,{row:0,column:2}],

    "/pa/units/orbital/c_radar_satellite/c_radar_satellite.json":["orbital",0,{row:2,column:2}],
    "/pa/units/orbital/c_radar_satellite_adv/c_radar_satellite_adv.json":["orbital",0,{row:1,column:2}],
    "/pa/units/orbital/c_l_radar_satellite/c_l_radar_satellite.json":["L_orbital",0,{row:2,column:2}],
    "/pa/units/orbital/c_l_radar_satellite_adv/c_l_radar_satellite_adv.json":["L_orbital",0,{row:1,column:2}],

    //"/pa/units/land/defence/anti_orbital_titan/anti_orbital_titan.json": ["utility",0,{row:2,column:5}],
    //"/pa/units/land/defence/l_anti_orbital_titan/l_anti_orbital_titan.json": ["L_utility",0,{row:2,column:5}]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}