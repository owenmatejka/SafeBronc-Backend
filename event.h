#ifndef EVENT
#define EVENT
#include <string>
#include <time.h>

using namespace std;
class Event{
public:
    Event();
    Event(string n, string t, string l);
    Event(int h, int m); //just to
    string name() { return name; }
    string time() { return time; }
    string location() { return location }
    void setName(string n) { name = n; }
    void setTime(int h, int m)
    {
      hour = h;
      min = m;
    }
    void setLocation(string l) { location = l; }

private:
  string name;
  string time;
  string location;
};

#endif //event
