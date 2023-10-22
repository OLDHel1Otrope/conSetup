package package1;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class Claxx {

	public static void main(String[] args) {
		
		JFrame frame=new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(1280,960);
		frame.setVisible(true);
		frame.setLayout(new BorderLayout(0,0));
		
		JPanel panel1=new JPanel();
		JPanel panel2=new JPanel();
		JPanel panel3=new JPanel();
		JPanel panel4=new JPanel();
		JPanel panel5=new JPanel();
		
		panel1.setBackground(new Color(0xa3a3a3));
		panel2.setBackground(new Color(0x545353));
		panel3.setBackground(new Color(0x8c8989));
		panel4.setBackground(new Color(0x262626));
		panel5.setBackground(new Color(0x141414));
		
		panel1.setPreferredSize(new Dimension(50,50));
		panel2.setPreferredSize(new Dimension(50,50));
		panel3.setPreferredSize(new Dimension(50,50));
		panel4.setPreferredSize(new Dimension(50,50));
		panel5.setPreferredSize(new Dimension(100,100));
		
		frame.add(panel1,BorderLayout.NORTH);
		frame.add(panel2,BorderLayout.SOUTH);
		frame.add(panel3,BorderLayout.EAST);
		frame.add(panel4,BorderLayout.WEST);
		frame.add(panel5,BorderLayout.CENTER);
		
		//these panels have to be inside panel5
		
		JPanel panel6=new JPanel();
		JPanel panel7=new JPanel();
		JPanel panel8=new JPanel();
		JPanel panel9=new JPanel();
		JPanel panel10=new JPanel();
		
		panel6.setBackground(new Color(0xffffff));
		panel6.setPreferredSize(new Dimension(700,50));
		//configuring panel5
		
		panel5.setLayout(new BorderLayout(0,0));
		panel5.add(panel6,BorderLayout.EAST);
	}

}
