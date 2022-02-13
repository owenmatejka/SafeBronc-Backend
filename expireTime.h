#ifndef EXPIRETIME_H
#define EXPIRETIME_H
#include "event.h"
#include <ctime>
#include <time.h>
#include <chrono>
#include <thread>  

class ExpireTime : public Event
{
private:
int setTimer; //in seconds
time_t current_time;


public:
  ExpireTime();
  ExpireTime(int sT, int h, int m)  : Event(h, m);
  int getTimer() { return setTimer; }
  void setTimer(int sT) { setTimer = sT; }
  void stopEvent(int sT);



};

#endif
