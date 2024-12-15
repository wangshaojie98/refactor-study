
class HotelService {
  public double getRoomPrice(final User user, final Room room) {
    double price = room.getPrice();
    if (user.getLevel() == Level.GOLD) {
      return price * 0.8;
    }
    
    if (user.getLevel() == Level.SILVER) {
      return price * 0.9;
    }
    
    return price;
  }
}


class HotelService {
  public double getRoomPrice(final User user, final Room room) {
    double price = room.getPrice();
    if (user.getLevel() == UserLevel.GOLD) {
      return price * 0.8;
    }
    
    if (user.getLevel() == UserLevel.SILVER) {
      return price * 0.9;
    }
    
    if (user.getLevel() == UserLevel.PLATINUM) {
      return price * 0.75;
    }
    
    return price;
  }
}


interface UserLevel {
  double getRoomPrice(Room room);
}

class GoldUserLevel implements UserLevel {
  public double getRoomPrice(final Room room) {
    return room.getPrice() * 0.8;
  }
}

class SilverUserLevel implements UserLevel {
  public double getRoomPrice(final Room room) {
    return room.getPrice() * 0.9;
  }
}

// 最终
class HotelService {
  public double getRoomPrice(final User user, final Room room) {
    return user.getRoomPrice(room);
  }
}

// 判断使用哪个UserLevel需要再new User时候进行
class User {
  private UserLevel level;
  ...
  
  public double getRoomPrice(final Room room) {
    return level.getRoomPrice(room);
  }
}