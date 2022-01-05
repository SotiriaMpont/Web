--
-- PostgreSQL database dump
--

-- Dumped from database version 10.19
-- Dumped by pg_dump version 10.19

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: trace; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA trace;


ALTER SCHEMA trace OWNER TO postgres;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: popular_times; Type: TABLE; Schema: trace; Owner: postgres
--

CREATE TABLE trace.popular_times (
    pt_id integer NOT NULL,
    p_id integer NOT NULL,
    day date NOT NULL,
    hour00 integer NOT NULL,
    hour01 integer NOT NULL,
    hour02 integer NOT NULL,
    hour03 integer NOT NULL,
    hour04 integer NOT NULL,
    hour05 integer NOT NULL,
    hour06 integer NOT NULL,
    hour07 integer NOT NULL,
    hour08 integer NOT NULL,
    hour09 integer NOT NULL,
    hour10 integer NOT NULL,
    hour11 integer NOT NULL,
    hour12 integer NOT NULL,
    hour13 integer NOT NULL,
    hour14 integer NOT NULL,
    hour15 integer NOT NULL,
    hour16 integer NOT NULL,
    hour17 integer NOT NULL,
    hour18 integer NOT NULL,
    hour19 integer NOT NULL,
    hour20 integer NOT NULL,
    hour21 integer NOT NULL,
    hour22 integer NOT NULL,
    hour23 integer NOT NULL
);


ALTER TABLE trace.popular_times OWNER TO postgres;

--
-- Name: popular_times_p_id_seq; Type: SEQUENCE; Schema: trace; Owner: postgres
--

CREATE SEQUENCE trace.popular_times_p_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE trace.popular_times_p_id_seq OWNER TO postgres;

--
-- Name: popular_times_p_id_seq; Type: SEQUENCE OWNED BY; Schema: trace; Owner: postgres
--

ALTER SEQUENCE trace.popular_times_p_id_seq OWNED BY trace.popular_times.p_id;


--
-- Name: popular_times_pt_id_seq; Type: SEQUENCE; Schema: trace; Owner: postgres
--

CREATE SEQUENCE trace.popular_times_pt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE trace.popular_times_pt_id_seq OWNER TO postgres;

--
-- Name: popular_times_pt_id_seq; Type: SEQUENCE OWNED BY; Schema: trace; Owner: postgres
--

ALTER SEQUENCE trace.popular_times_pt_id_seq OWNED BY trace.popular_times.pt_id;


--
-- Name: position; Type: TABLE; Schema: trace; Owner: postgres
--

CREATE TABLE trace."position" (
    p_name character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    coordinates point NOT NULL,
    pupulartimes json NOT NULL,
    user_id integer NOT NULL,
    p_id integer NOT NULL
);


ALTER TABLE trace."position" OWNER TO postgres;

--
-- Name: position_p_id_seq; Type: SEQUENCE; Schema: trace; Owner: postgres
--

CREATE SEQUENCE trace.position_p_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE trace.position_p_id_seq OWNER TO postgres;

--
-- Name: position_p_id_seq; Type: SEQUENCE OWNED BY; Schema: trace; Owner: postgres
--

ALTER SEQUENCE trace.position_p_id_seq OWNED BY trace."position".p_id;


--
-- Name: position_user_id_seq; Type: SEQUENCE; Schema: trace; Owner: postgres
--

CREATE SEQUENCE trace.position_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE trace.position_user_id_seq OWNER TO postgres;

--
-- Name: position_user_id_seq; Type: SEQUENCE OWNED BY; Schema: trace; Owner: postgres
--

ALTER SEQUENCE trace.position_user_id_seq OWNED BY trace."position".user_id;


--
-- Name: user; Type: TABLE; Schema: trace; Owner: postgres
--

CREATE TABLE trace."user" (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    is_admin bit(1) NOT NULL,
    created_on timestamp without time zone NOT NULL,
    last_login timestamp without time zone
);


ALTER TABLE trace."user" OWNER TO postgres;

--
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: trace; Owner: postgres
--

CREATE SEQUENCE trace.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE trace.user_user_id_seq OWNER TO postgres;

--
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: trace; Owner: postgres
--

ALTER SEQUENCE trace.user_user_id_seq OWNED BY trace."user".user_id;


--
-- Name: popular_times pt_id; Type: DEFAULT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace.popular_times ALTER COLUMN pt_id SET DEFAULT nextval('trace.popular_times_pt_id_seq'::regclass);


--
-- Name: popular_times p_id; Type: DEFAULT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace.popular_times ALTER COLUMN p_id SET DEFAULT nextval('trace.popular_times_p_id_seq'::regclass);


--
-- Name: position user_id; Type: DEFAULT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."position" ALTER COLUMN user_id SET DEFAULT nextval('trace.position_user_id_seq'::regclass);


--
-- Name: position p_id; Type: DEFAULT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."position" ALTER COLUMN p_id SET DEFAULT nextval('trace.position_p_id_seq'::regclass);


--
-- Name: user user_id; Type: DEFAULT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."user" ALTER COLUMN user_id SET DEFAULT nextval('trace.user_user_id_seq'::regclass);


--
-- Data for Name: popular_times; Type: TABLE DATA; Schema: trace; Owner: postgres
--

COPY trace.popular_times (pt_id, p_id, day, hour00, hour01, hour02, hour03, hour04, hour05, hour06, hour07, hour08, hour09, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23) FROM stdin;
\.


--
-- Data for Name: position; Type: TABLE DATA; Schema: trace; Owner: postgres
--

COPY trace."position" (p_name, address, coordinates, pupulartimes, user_id, p_id) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: trace; Owner: postgres
--

COPY trace."user" (user_id, username, password, email, is_admin, created_on, last_login) FROM stdin;
\.


--
-- Name: popular_times_p_id_seq; Type: SEQUENCE SET; Schema: trace; Owner: postgres
--

SELECT pg_catalog.setval('trace.popular_times_p_id_seq', 1, false);


--
-- Name: popular_times_pt_id_seq; Type: SEQUENCE SET; Schema: trace; Owner: postgres
--

SELECT pg_catalog.setval('trace.popular_times_pt_id_seq', 1, false);


--
-- Name: position_p_id_seq; Type: SEQUENCE SET; Schema: trace; Owner: postgres
--

SELECT pg_catalog.setval('trace.position_p_id_seq', 1, false);


--
-- Name: position_user_id_seq; Type: SEQUENCE SET; Schema: trace; Owner: postgres
--

SELECT pg_catalog.setval('trace.position_user_id_seq', 1, false);


--
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: trace; Owner: postgres
--

SELECT pg_catalog.setval('trace.user_user_id_seq', 1, false);


--
-- Name: popular_times popular_times_pkey; Type: CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace.popular_times
    ADD CONSTRAINT popular_times_pkey PRIMARY KEY (pt_id);


--
-- Name: position position_pkey; Type: CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (p_id);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- Name: popular_times f1; Type: FK CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace.popular_times
    ADD CONSTRAINT f1 FOREIGN KEY (p_id) REFERENCES trace."position"(p_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: position position_user_id_fkey; Type: FK CONSTRAINT; Schema: trace; Owner: postgres
--

ALTER TABLE ONLY trace."position"
    ADD CONSTRAINT position_user_id_fkey FOREIGN KEY (user_id) REFERENCES trace."user"(user_id);


--
-- PostgreSQL database dump complete
--

