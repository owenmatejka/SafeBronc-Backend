#ifndef EVENT
#define EVENT
#include <string>
#include <time.h>

using namespace std;
class Event{
public:
    Event();
    Event(string name, string location);
    
    /*string name() { return name; }
    string time() { return time; }
    string location() { return location }
    void setName(string n) { name = n; }
    void setTime(int h, int m)
    {
      hour = h;
      min = m;
    }
    void setLocation(string l) { location = l; }*/
    void createEvent();
private:
  string name;
  string time;
  string location;
};

#endif //event
