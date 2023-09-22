-- create countries table and set our primary key


CREATE TABLE countries (
    country_name varchar (150),
    country_iso2 varchar (2),
    week date,
    category varchar (50),
	weekly_rank int,
	show_title varchar (150),
	season_title varchar (150),
	cumulative_weeks_in_top_10 int
);


CREATE TABLE global_ (
    No int,
    movie varchar (150),
	week_at_Top10 int,
	hours_seen decimal,
	duration time,
	views decimal
);

CREATE TABLE most_popular (
	category varchar (150),
	rank int,
	show_title varchar (150),
	season_title varchar(150),
	hours_viewed_first_91_days decimal,
	runtime float,
	views_first_91_days decimal
);
