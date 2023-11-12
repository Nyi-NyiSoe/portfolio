import 'package:flutter/material.dart';
import 'package:portfolio/widgets/screens/desktop_screen.dart';
import 'package:portfolio/widgets/screens/mobile_screen.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: ((context, constraints) {
      if(constraints.maxWidth < 600){
        return MobileScreen();
      }else{
        return DesktopScreen();
      }

    }));
  }
}