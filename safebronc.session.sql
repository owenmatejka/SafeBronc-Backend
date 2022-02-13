CREATE TABLE safebronc.user{
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT null,
    FirstName varchar(255),
    isVerified BIT(1) DEFAULT 0,
    PRIMARY key(Personid)
}

CREATE TABLE safebronc.events{
    Eventid int NOT NULL AUTO_INCREMENT,
    EventName varchar(255) NOT null,
    Location varchar(255),
    ExpireTime DATETIME,
    PRIMARY key(Personid)
}