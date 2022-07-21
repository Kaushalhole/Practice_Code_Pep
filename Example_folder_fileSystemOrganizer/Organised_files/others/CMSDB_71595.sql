create database CMSDB_71595;

use CMSDB_71595;

create table login(login_id int primary key auto_increment, username varchar(255) not null, password varchar(255) not null);
describe login;

create table customer(customer_id int primary key auto_increment, customer_name varchar(100), customer_coupon varchar(50), customer_walletBalance double, login_id int);
describe customer;

create table fooditem(food_id int primary key auto_increment, food_name varchar(100), food_price double, vendor_id int);
describe fooditem;

create table vendor(vendor_id int primary key auto_increment, vendor_name varchar(100), vendor_phone varchar(100), vendor_specs varchar(255));
describe vendor;

create table order_details(order_id int primary key auto_increment, quantity int, date_time date, order_value double, order_status varchar(100), customer_id int, food_id int);
describe order_details;

insert into vendor(vendor_name, vendor_phone, vendor_specs) values ('Mumbai Catering','8484868884', 'South Indian');
insert into vendor(vendor_name, vendor_phone, vendor_specs) values ('Indian Foods','9370547440', 'North Indian');

select * from vendor;

insert into fooditem(food_name, food_price, vendor_id) values ('Idli 2 pieces ', 70,1);
insert into fooditem(food_name, food_price, vendor_id) values ('Masala Dosa ', 120,1);
insert into fooditem(food_name, food_price, vendor_id) values ('Omiom Uttappam ', 150,1);
insert into fooditem(food_name, food_price, vendor_id) values ('Paneer Roll ', 140,2);
insert into fooditem(food_name, food_price, vendor_id) values ('Paneer Masala ', 240,2);

select * from fooditem;

insert into login(username, password) values ("harry",'potter');
insert into login(username, password) values ("ronald",'weasley');

insert into customer(customer_name, customer_coupon, customer_walletBalance, login_id) values ('harry potter', 'AE123', 1000,1);
insert into customer(customer_name, customer_coupon, customer_walletBalance, login_id) values ('ronald weasley', 'B132', 300,2);












