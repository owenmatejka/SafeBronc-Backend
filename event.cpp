#include "event.h"

Event::Event()
{
  name = "";
  hour = 0;
  min = 0;
  location = "";
}
Event::Event(string n, int h, int m, string l)
{
  name = n;
  hour = h;
  min = m;
  location = l;
}
