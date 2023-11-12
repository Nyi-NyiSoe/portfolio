import 'package:flutter/material.dart';
import 'package:portfolio/widgets/navbar.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class DesktopScreen extends StatelessWidget {
  DesktopScreen({super.key});

  final navTitles = {'Home', 'About', 'Projects', 'Contact'};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          ...navTitles.map((e) => NavBar(onPressed: () {}, buttonName: e))
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Card(
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: MediaQuery.of(context).size.width * 0.4,
                      height: MediaQuery.of(context).size.height,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Text(
                            'Hello! I\'m Nyi Nyi Soe, a developer based in Myanmar.',
                            style: TextStyle(
                                fontSize: 30, fontWeight: FontWeight.bold),
                          ),
                         const  Text(
                            'My passion lies in crafting innovative solutions and user-friendly applications. Proficient in mobile development with Flutter, I thrive in dynamic, collaborative environments. Let\'s embark on a journey to create impactful and efficient solutions together.',
                            style: TextStyle(fontSize: 20, height: 2.5),
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              SizedBox(
                                height: 50,
                                child: ElevatedButton(
                                  onPressed: () {},
                                  child: const Row(
                                    children: [
                                      Icon(FontAwesomeIcons.linkedin),
                                      Text('LinkedIn')
                                    ],
                                  ),
                                ),
                              ),
                              SizedBox(
                                height: 50,
                                child: ElevatedButton(
                                    onPressed: () {},
                                    child: const Row(
                                      children: [
                                        Icon(FontAwesomeIcons.github),
                                        Text('Github')
                                      ],
                                    )),
                              )
                            ],
                          )
                        ],
                      ),
                    ),
                    SizedBox(
                      height: MediaQuery.of(context).size.height * 0.7,
                      width: MediaQuery.of(context).size.width * 0.45,
                      child: const Image(
                        image: AssetImage('images/profile.png'),
                        fit: BoxFit.contain,
                      ),
                    )
                  ],
                ),
              ),
            ),
          Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Projects',style: TextStyle(fontSize: 30),),
                  Text('Recent projects that I worked on:',style: TextStyle(fontSize: 20),)
                ],
              ),
            ),
          )
          
          ],
        ),
      ),
    );
  }
}
