PGDMP     4                     z            MyVisit    10.19    10.19 *               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16393    MyVisit    DATABASE     �   CREATE DATABASE "MyVisit" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "MyVisit";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        2615    16394    trace    SCHEMA        CREATE SCHEMA trace;
    DROP SCHEMA trace;
             postgres    false                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16507    popular_times    TABLE     +  CREATE TABLE trace.popular_times (
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
     DROP TABLE trace.popular_times;
       trace         postgres    false    5            �            1259    16505    popular_times_p_id_seq    SEQUENCE     �   CREATE SEQUENCE trace.popular_times_p_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE trace.popular_times_p_id_seq;
       trace       postgres    false    204    5                       0    0    popular_times_p_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE trace.popular_times_p_id_seq OWNED BY trace.popular_times.p_id;
            trace       postgres    false    203            �            1259    16503    popular_times_pt_id_seq    SEQUENCE     �   CREATE SEQUENCE trace.popular_times_pt_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE trace.popular_times_pt_id_seq;
       trace       postgres    false    5    204                       0    0    popular_times_pt_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE trace.popular_times_pt_id_seq OWNED BY trace.popular_times.pt_id;
            trace       postgres    false    202            �            1259    16466    position    TABLE     �   CREATE TABLE trace."position" (
    p_name character varying(100) NOT NULL,
    address character varying(100) NOT NULL,
    coordinates point NOT NULL,
    pupulartimes json NOT NULL,
    user_id integer NOT NULL,
    p_id integer NOT NULL
);
    DROP TABLE trace."position";
       trace         postgres    false    5            �            1259    16480    position_p_id_seq    SEQUENCE     �   CREATE SEQUENCE trace.position_p_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE trace.position_p_id_seq;
       trace       postgres    false    200    5                       0    0    position_p_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE trace.position_p_id_seq OWNED BY trace."position".p_id;
            trace       postgres    false    201            �            1259    16464    position_user_id_seq    SEQUENCE     �   CREATE SEQUENCE trace.position_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE trace.position_user_id_seq;
       trace       postgres    false    200    5                       0    0    position_user_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE trace.position_user_id_seq OWNED BY trace."position".user_id;
            trace       postgres    false    199            �            1259    16421    user    TABLE     @  CREATE TABLE trace."user" (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    is_admin bit(1) NOT NULL,
    created_on timestamp without time zone NOT NULL,
    last_login timestamp without time zone
);
    DROP TABLE trace."user";
       trace         postgres    false    5            �            1259    16419    user_user_id_seq    SEQUENCE     �   CREATE SEQUENCE trace.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE trace.user_user_id_seq;
       trace       postgres    false    5    198                       0    0    user_user_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE trace.user_user_id_seq OWNED BY trace."user".user_id;
            trace       postgres    false    197            �
           2604    16510    popular_times pt_id    DEFAULT     x   ALTER TABLE ONLY trace.popular_times ALTER COLUMN pt_id SET DEFAULT nextval('trace.popular_times_pt_id_seq'::regclass);
 A   ALTER TABLE trace.popular_times ALTER COLUMN pt_id DROP DEFAULT;
       trace       postgres    false    202    204    204            �
           2604    16511    popular_times p_id    DEFAULT     v   ALTER TABLE ONLY trace.popular_times ALTER COLUMN p_id SET DEFAULT nextval('trace.popular_times_p_id_seq'::regclass);
 @   ALTER TABLE trace.popular_times ALTER COLUMN p_id DROP DEFAULT;
       trace       postgres    false    204    203    204            �
           2604    16469    position user_id    DEFAULT     t   ALTER TABLE ONLY trace."position" ALTER COLUMN user_id SET DEFAULT nextval('trace.position_user_id_seq'::regclass);
 @   ALTER TABLE trace."position" ALTER COLUMN user_id DROP DEFAULT;
       trace       postgres    false    200    199    200            �
           2604    16482    position p_id    DEFAULT     n   ALTER TABLE ONLY trace."position" ALTER COLUMN p_id SET DEFAULT nextval('trace.position_p_id_seq'::regclass);
 =   ALTER TABLE trace."position" ALTER COLUMN p_id DROP DEFAULT;
       trace       postgres    false    201    200            �
           2604    16424    user user_id    DEFAULT     l   ALTER TABLE ONLY trace."user" ALTER COLUMN user_id SET DEFAULT nextval('trace.user_user_id_seq'::regclass);
 <   ALTER TABLE trace."user" ALTER COLUMN user_id DROP DEFAULT;
       trace       postgres    false    197    198    198                      0    16507    popular_times 
   TABLE DATA               �   COPY trace.popular_times (pt_id, p_id, day, hour00, hour01, hour02, hour03, hour04, hour05, hour06, hour07, hour08, hour09, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17, hour18, hour19, hour20, hour21, hour22, hour23) FROM stdin;
    trace       postgres    false    204   �/                 0    16466    position 
   TABLE DATA               ^   COPY trace."position" (p_name, address, coordinates, pupulartimes, user_id, p_id) FROM stdin;
    trace       postgres    false    200   �/                 0    16421    user 
   TABLE DATA               e   COPY trace."user" (user_id, username, password, email, is_admin, created_on, last_login) FROM stdin;
    trace       postgres    false    198   �/                  0    0    popular_times_p_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('trace.popular_times_p_id_seq', 1, false);
            trace       postgres    false    203                        0    0    popular_times_pt_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('trace.popular_times_pt_id_seq', 1, false);
            trace       postgres    false    202            !           0    0    position_p_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('trace.position_p_id_seq', 1, false);
            trace       postgres    false    201            "           0    0    position_user_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('trace.position_user_id_seq', 1, false);
            trace       postgres    false    199            #           0    0    user_user_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('trace.user_user_id_seq', 1, false);
            trace       postgres    false    197            �
           2606    16513     popular_times popular_times_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY trace.popular_times
    ADD CONSTRAINT popular_times_pkey PRIMARY KEY (pt_id);
 I   ALTER TABLE ONLY trace.popular_times DROP CONSTRAINT popular_times_pkey;
       trace         postgres    false    204            �
           2606    16484    position position_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY trace."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (p_id);
 A   ALTER TABLE ONLY trace."position" DROP CONSTRAINT position_pkey;
       trace         postgres    false    200            �
           2606    16430    user user_email_key 
   CONSTRAINT     P   ALTER TABLE ONLY trace."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 >   ALTER TABLE ONLY trace."user" DROP CONSTRAINT user_email_key;
       trace         postgres    false    198            �
           2606    16426    user user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY trace."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);
 9   ALTER TABLE ONLY trace."user" DROP CONSTRAINT user_pkey;
       trace         postgres    false    198            �
           2606    16428    user user_username_key 
   CONSTRAINT     V   ALTER TABLE ONLY trace."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);
 A   ALTER TABLE ONLY trace."user" DROP CONSTRAINT user_username_key;
       trace         postgres    false    198            �
           2606    16514    popular_times f1    FK CONSTRAINT     �   ALTER TABLE ONLY trace.popular_times
    ADD CONSTRAINT f1 FOREIGN KEY (p_id) REFERENCES trace."position"(p_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 9   ALTER TABLE ONLY trace.popular_times DROP CONSTRAINT f1;
       trace       postgres    false    2700    204    200            �
           2606    16475    position position_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY trace."position"
    ADD CONSTRAINT position_user_id_fkey FOREIGN KEY (user_id) REFERENCES trace."user"(user_id);
 I   ALTER TABLE ONLY trace."position" DROP CONSTRAINT position_user_id_fkey;
       trace       postgres    false    2696    200    198                  x������ � �            x������ � �            x������ � �     