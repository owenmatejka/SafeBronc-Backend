#include "expireTime.h"

ExpireTime::ExpireTime()
{
  setTimer = 0;
}
ExpireTime::ExpireTime(int sT, int h, int m)  : Event(h, m)
{
  setTimer = sT;
}

ExpireTime::void stopEvent()
{

  auto start = chrono::steady_clock::now();
  auto end = chrono::steady_clock::now();

  if(chrono::duration_cast<chrono::seconds>(end - start).count() > getTimer())
  {
    
  }

}
