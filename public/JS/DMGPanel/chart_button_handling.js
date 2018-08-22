$(document).ready(function () {
    $('#statisticsPanelArea').on('click', 'button[id="chart_button"]', function () {
        let StatisticsTemplates = new StatisticsPanelTemplates();
        StatisticsTemplates.getChartPanel('.statistics-panel');

        $(document).ready(function () {
            let ctx = document.getElementById("myChart");
            let damageNear = statistics.getDamageNearForDMGChart();
            let damageFar = statistics.getDamageFarForDMGChart();
            let rangeNear = statistics.getRangeNear();
            let rangeFar = statistics.getRangeFar();
            let rangeMax = statistics.getRangeMax();

            let heavySet = DMGCalculations.getHeavySet();
            let bodyHit = DMGCalculations.getBodyHit();

            let DMGNear = statistics.getDamage();
            let DMGFar = statistics.getDamageFar();

            if (damageNear === 0) {
                damageNear = DMGNear
            }
            if (damageFar === 0) {
                damageFar = DMGFar
            }

            let DMGNearCalculations = new DamageCalculation(DMGNear);
            let DMGFarCalculations = new DamageCalculation(DMGFar);
            let labelX = [];
            let dataY = [];
            $('#max_range_chart_set').on('click', function () {
                let range = $('#max_range_chart').val();
                statistics.setRangeForDMGChart(range);
            });
            let setRange = statistics.getRangeForDMGChart();
            if (setRange == 0) {
                setRange = rangeMax
            } else {
                setRange = statistics.getRangeForDMGChart();
            }
            //Head hit
            $('#head_hit_dmg_chart').on('click', function () {
                DMGCalculations.setBodyHit(4);
            });
            //Body hit
            $('#body_hit_dmg_chart').on('click', function () {
                DMGCalculations.setBodyHit(1);
            });
            //Arms hit
            $('#arms_hit_dmg_chart').on('click', function () {
                DMGCalculations.setBodyHit(0.5);
            });
            //Legs hit
            $('#legs_hit_dmg_chart').on('click', function () {
                DMGCalculations.setBodyHit(0.8);
            });
            //no heavy set
            $('#no_heavy_set_dmg_chart').on('click', function () {
                DMGCalculations.setHeavySet(0);
            });
            //bronze heavy set
            $('#bronze_heavy_set_dmg_chart').on('click', function () {
                DMGCalculations.setHeavySet(1);
            });
            //silver heavy set
            $('#silver_heavy_set_dmg_chart').on('click', function () {
                DMGCalculations.setHeavySet(2);
            });
            //gold heavy set
            $('#gold_heavy_set_dmg_chart').on('click', function () {
                DMGCalculations.setHeavySet(3);
            });

            let damageFarCalc = DMGFarCalculations.getDamageHHeavySet(heavySet, bodyHit);
            statistics.setDamageFarForDMGChart(damageFarCalc);
            let damageNearCalc = DMGNearCalculations.getDamageHHeavySet(heavySet, bodyHit);
            statistics.setDamageNearForDMGChart(damageNearCalc);

            // Check which radio button was checked
            switch (heavySet) {
                case 0:
                    $('#no_heavy_set_dmg_chart').prop('checked', true);
                    break;
                case 1:
                    $('#bronze_heavy_set_dmg_chart').prop('checked', true);
                    break;
                case 2:
                    $('#silver_heavy_set_dmg_chart').prop('checked', true);
                    break;
                case 3:
                    $('#gold_heavy_set_dmg_chart').prop('checked', true);
                    break;
                default:
                    $('#no_heavy_set_dmg_chart').prop('checked', true);
            }
            switch (bodyHit) {
                case 4:
                    $('#head_hit_dmg_chart').prop('checked', true);
                    break;
                case 1:
                    $('#body_hit_dmg_chart').prop('checked', true);
                    break;
                case 0.5:
                    $('#arms_hit_dmg_chart').prop('checked', true);
                    break;
                case 0.8:
                    $('#legs_hit_dmg_chart').prop('checked', true);
                    break;
                default:
                    $('#head_hit_dmg_chart').prop('checked', true);
            }

            let damageBetween = damageNear - damageFar;
            let rangeBetween = rangeFar - rangeNear;
            let damageFall = damageNear;

            // calculations for data dor chart
            for (let i = 0; i < setRange; i++) {
                if (i <= rangeNear) {
                    labelX[i] = i;
                    dataY[i] = damageNear;
                } else if (i >= rangeFar) {
                    labelX[i] = i;
                    dataY[i] = damageFar;
                } else {
                    let betweenIterationFloat = parseFloat(rangeBetween / damageBetween);
                    damageFall = Math.round((damageFall - (1 / betweenIterationFloat)) * 100) / 100;
                    labelX[i] = i;
                    dataY[i] = damageFall;
                }
            }
            ;
            let myChart = new Chart(ctx, {

                type: 'line',
                data: {
                    labels: labelX,
                    datasets: [{
                        label: 'Damage',
                        data: dataY,
                        backgroundColor: 'rgba(255, 99, 132, 0.1)',
                        pointRadius: 1,
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Damage',
                                fontColor: 'white',
                                fontFamily: 'arial',
                                fontSize: '15'
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Range',
                                fontColor: 'white',
                                fontFamily: 'arial',
                                fontSize: '15'
                            }
                        }]
                    }
                }
            });
            $('#max_range_chart').attr('placeholder', 'Range (max: ' + rangeMax + ')');
            $('#set_and_update_chart').on('click', function () {
                myChart.destroy();
                $('#max_range_chart_set').trigger('click');
                $('#chart_button').trigger('click');
                $(document).ready(function () {
                    $('#max_range_chart_set').trigger('click');
                    $('#chart_button').trigger('click');
                });

            });
        });
    });
});
