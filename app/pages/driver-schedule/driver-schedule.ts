import {Component} from '@angular/core';

@Component({
  templateUrl: 'build/pages/driver-schedule/driver-schedule.html'
})
export class DriverSchedulePage {
  driverInfo: any;

  constructor() {

    this.driverInfo = {
      DriverId: 123456,
      DriverName: 'Marty McFly',
      DriverPhone: '913-555-1212',
      Schedule: {
        ClockInTime: '06:00',
          ClockOutTime: '15:00',
          DepotDepartTime: '06:30',
          DepotReturnTime: '14:30',
          IsConfirmed: false
      }
    };

  }

  public confirmSchedule = () => {
    this.driverInfo.Schedule.IsConfirmed = true;
  };
}
