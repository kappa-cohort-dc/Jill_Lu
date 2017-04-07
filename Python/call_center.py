class Call(object):
    def __init__(self, id, name, phone_num, time, reason):
        self.id = id
        self.name = name
        self.phone_num = phone_num
        self.time = time
        self.reason = reason

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue = 0
    def add_calls(self, newCalls):
        self.queue += 1
        self.calls.append(newCalls)
    def remove_calls(self, removeCalls):
        self.queue -= 1
        self.calls.pop(0)
    def info(self):
        for x in range(0,len(self.calls)):
            print "Caller Name:", self.calls[x].name
            print "Phone Number:", self.calls[x].phone_num
            print "Calls in queue:", self.queue
            return self
    def call_info(self):
        print "Caller ID:", self.id
        print "Caller Name:", self.name
        print "Caller Phone Number", self.phone_num
        print "Time of Call:", self.time
        print "Reason for Call:", self.reason
        return self

caller1 = Call(111, "Harry Potter", "800-888-8888", "3:00", "Lord V's on site!" )
caller2 = Call(222, "Ron Weasley", "123-444-5678", "6:00", "There's a giant spider!")

center = CallCenter()
center.add_calls(caller1).call_info()
center.add_calls(caller2).call_info()
